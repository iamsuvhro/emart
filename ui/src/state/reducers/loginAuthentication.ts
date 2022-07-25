import { authLogin } from "../action-creators";
import { Action } from "../actions/index";

const initialValue = localStorage.getItem("authStatus")
  ? JSON.parse(localStorage.getItem("authStatus")!)
  : false;

const reducer = (state: boolean = initialValue, action: Action) => {
  switch (action.type) {
    case "authLogin":
      state = action.payload;
      return state;
    case "authLogout":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
