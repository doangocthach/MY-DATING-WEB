import produce from "immer";
import { CLEANUP } from "../LoginPage/constants";
import { REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from "./constants";
import ActionTypes from "./types";
export interface InitialState {
  registerSuccess: any;
  responseData: any;
}
export const initialState: InitialState = {
  registerSuccess: null,
  responseData: null,
};
// const InitialState: ActionTypes = {};
const registerPageReducer = (state = initialState, action: ActionTypes) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REGISTER:
        draft.registerSuccess = null;
        draft.responseData = null;
        break;
      case REGISTER_FAILURE:
        draft.registerSuccess = false;
        draft.responseData = null;
        break;
      case REGISTER_SUCCESS:
        draft.registerSuccess = true;
        draft.responseData = action.data;
        break;
      case CLEANUP:
        draft.responseData = null;
        draft.registerSuccess = null;
        break;
    }
  });

export default registerPageReducer;
