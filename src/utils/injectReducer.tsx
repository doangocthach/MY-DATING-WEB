import React, { ComponentType, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";
import { Reducer } from "redux";
import getInjectors from "./reducerInjectors";
import { ReactReduxContext } from "react-redux";

// /**
//  * Dynamically injects a reducer
//  *
//  * @param {string} key A key of the reducer
//  * @param {function} reducer A reducer that will be injected
//  *
//  */
// interface NewComponent extends React.Component {
//   displayName: string;
//   name: string;
// }
interface IParams {
  key: string;
  reducer: Reducer;
}
// export default (params: IParams) => (WrappedComponent: ComponentType) => {
//   const { key, reducer } = params;
//   class ReducerInjector extends React.Component {
//     static WrappedComponent = WrappedComponent;
//     static displayName = `withReducer(${
//       WrappedComponent.displayName || WrappedComponent.name || "Component"
//     })`;
//     static contextTypes = {
//       // eslint-disable-next-line react/forbid-prop-types
//       store: PropTypes.object.isRequired,
//     };

//     // eslint-disable-next-line camelcase
//     UNSAFE_componentWillMount() {
//       const { injectReducer } = this.injectors;

//       injectReducer(key, reducer);
//     }

//     injectors = getInjectors(this.context.store);
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }

//   return hoistNonReactStatics(ReducerInjector, WrappedComponent);
// };

const useInjectReducer = (params: IParams) => {
  const { key, reducer } = params;
  const contex = useContext(ReactReduxContext);
  useEffect(() => {
    getInjectors(contex.store).injectReducer(key, reducer);
  }, []);
};

export { useInjectReducer };
