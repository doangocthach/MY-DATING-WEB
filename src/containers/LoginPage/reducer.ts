import produce from "immer";
import { CLEANUP, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./constants";
import ActionTypes from "./types";
interface InitialState {
  loginSuccess: any;
}
export const initialState: InitialState = {
  loginSuccess: null,
};
// const InitialState: ActionTypes = {};
const loginPageReducer = (state = initialState, action: ActionTypes): void => {
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN:
        draft.loginSuccess = null;
        break;
      case LOGIN_FAILURE:
        draft.loginSuccess = false;
        break;
      case LOGIN_SUCCESS:
        draft.loginSuccess = true;
        break;
      case CLEANUP:
        draft.loginSuccess = null;
        break;
    }
  });
};

export default loginPageReducer;
