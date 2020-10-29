import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./constants";
// import action, { StartAction, FailureAction, SuccessAction } from "./types";
import action from "./types";
export function login(query: any): action {
  return {
    type: LOGIN,
    query,
  };
}
export function loginFailure(error: any): action {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}
export function loginSuccess(data: any): action {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
