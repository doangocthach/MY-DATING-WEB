import {
  CLEANUP,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "./constants";
// import action, { StartAction, FailureAction, SuccessAction } from "./types";
import action from "./types";
export function register(body: any): action {
  return {
    type: REGISTER,
    body,
  };
}
export function registerFailure(error: any): action {
  return {
    type: REGISTER_FAILURE,
    error,
  };
}
export function registerSuccess(data: any): action {
  return {
    type: REGISTER_SUCCESS,
    data,
  };
}

export function cleanup() {
  return {
    type: CLEANUP,
  };
}
