import { combineReducers } from "redux";
import manageUserReducer from "../components/user/duck/umReducer";
const appReducerObject = combineReducers({
  user: manageUserReducer,
});
export default appReducerObject;
