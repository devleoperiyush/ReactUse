import { put, call, takeLatest } from "redux-saga/effects";

import ACTIONS from "./umActionType";
import Axios from "../../../config/Settings";
function fetchUsers() {
  return Axios.get(`https://reqres.in/api/users/2`);
}

function fetchUserAll() {
  return Axios.get(`https://reqres.in/api/users?page=2`);
}

function* handleUserManagement(): any {
  try {
    // yield put({type: ACTIONS.FETCH_USER_REQUEST});
    let resp = yield call(fetchUsers);

    yield put({
      type: ACTIONS.FETCH_USER_SUCCESS,
      payload: resp.data.Data,
    });
  } catch (err: any) {
    yield put({
      type: ACTIONS.FETCH_USER_FAILURE,
      payload: err.response.data.Error[0],
    });
  }
}

function* handleUserALL(): any {
  try {
    // yield put({type: ACTIONS.FETCH_USER_REQUEST});

    let resp = yield call(fetchUserAll);

    yield put({
      type: ACTIONS.FETCH_USER_ALL_SUCCESS,
      payload: resp.data.Data,
    });
  } catch (err: any) {
    yield put({
      type: ACTIONS.FETCH_USER_ALL_FAILURE,
      payload: err.response.data.Error[0],
    });
  }
}

export default function* userManagementWatcher() {
  yield takeLatest(ACTIONS.FETCH_USER_REQUEST, handleUserManagement);
  yield takeLatest(ACTIONS.FETCH_USER_ALL_REQUEST, handleUserALL);
}
