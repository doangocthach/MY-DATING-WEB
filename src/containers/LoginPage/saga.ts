import { takeLatest } from "redux-saga/effects";
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./constants";
import ActionTypes from "./types";
function login(action: ActionTypes) {
  const { username, password } = action.query;
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN, login);
}
