/**
 * Create the store with dynamic reducers
 */

// import { combineReducers } from "redux-immutable";
import { createStore, applyMiddleware, compose, Store, Reducer } from "redux";
// import { fromJS } from "immutable";
// import { routerMiddleware } from "react-router-redux";
import { createMemoryHistory, History } from "history";
// import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import routeReducer from "./utils/routeReducer";
import createRootReducer from "./rootReducer";
import { routerMiddleware } from "connected-react-router";

/**
 * Creates the main reducer with the dynamically injected ones
 */
// export function createReducer(injectedReducers) {
//   return combineReducers({
//     route: routeReducer,
//     ...injectedReducers,
//   });
// }
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
  interface NodeModule {
    hot: any;
  }
}
interface NewStore extends Store {
  runSaga: any;
  injectedReducers: any;
  injectedSagas: any;
  history: any;
}

export default function configureStore(
  initialState = {},
  history: History
  // middlewares = []
) {
  const reduxSagaMonitorOptions = {};
  // Create the store with 3 middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. thunkMiddleware: Makes redux-thunk work
  // 3. routerMiddleware: Syncs the location/URL path to the state
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middleware = [sagaMiddleware, routerMiddleware(history)];
  // const middlewaresToApply = [
  //   sagaMiddleware,
  //   middleware,
  //   // routerMiddleware(history),
  //   // ...middlewares,
  // ];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = [applyMiddleware(...middleware)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  // const composeEnhancers =
  //   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //         // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
  //         // Prevent recomputing reducers for `replaceReducer`
  //         shouldHotReload: false,
  //       })
  //     : compose;
  // /* eslint-enable */

  const store: NewStore = createStore(
    createRootReducer(initialState),
    initialState,
    composeEnhancers(...enhancers)
  );

  // Extensions
  // store.runSaga = sagaMiddleware.run;
  // let newStore: NewStore = { ...store };
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = initialState; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  store.history = history; // history

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept("./configureStore.ts", () => {
      store.replaceReducer(
        createRootReducer(store.injectedReducers) as Reducer
      );
    });
  }

  return store;
}
