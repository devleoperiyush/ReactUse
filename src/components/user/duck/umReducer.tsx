import ACTIONS from "./umActionType";
import { combineReducers } from "redux";
interface IinitialData {
  data: any;
  loading: boolean;
  error: any;
}
const initialData = { data: null, loading: false, error: null };

const manageUserReducer = (
  state = initialData,
  action: { type: String; payload: any }
): IinitialData => {
  switch (action.type) {
    case ACTIONS.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTIONS.FETCH_USER_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case ACTIONS.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const manageUserAllReducer = (
  state = initialData,
  action: { type: String; payload: any }
): IinitialData => {
  switch (action.type) {
    case ACTIONS.FETCH_USER_ALL_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTIONS.FETCH_USER_ALL_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case ACTIONS.FETCH_USER_ALL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default combineReducers({
  manageUser: manageUserReducer,
  manageUserAll: manageUserAllReducer,
});
