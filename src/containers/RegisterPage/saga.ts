import { put, call, takeLatest } from "redux-saga/effects";
import {
  METHOD_REQUEST,
  REGISTER_URL,
  STATUS_CODE,
} from "../../utils/constants";
import { REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from "./constants";
import { registerSuccess, registerFailure } from "./actions";
import request from "../../utils/request";
import ActionTypes from "./types";
export function* register(action: ActionTypes) {
  const body = action.body;
  const url = REGISTER_URL;
  try {
    const response = yield call(request, url, {
      method: METHOD_REQUEST.POST,
      body: JSON.stringify(body),
    });
    if (`${response.status}` === `${STATUS_CODE.SUCCESS}`) {
      yield put(registerSuccess(response));
    } else {
      yield put(registerFailure(null));
    }
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

export default function* registerPageSaga() {
  yield takeLatest(REGISTER, register);
}
