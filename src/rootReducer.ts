import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    // global: adminPpage
    router: connectRouter(history),
    ...injectedReducers,
  });
}
