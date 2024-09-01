import { all } from "redux-saga/effects";
import userManagementWatcher from "../components/user/duck/umSaga";
const rootSaga = function* () {
  yield all([userManagementWatcher()]);
};
export default rootSaga;
