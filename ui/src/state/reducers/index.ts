import { combineReducers } from "redux";
import loginAuthentication from "./loginAuthentication";

const reducers = combineReducers({
    authStatus: loginAuthentication
});

export default reducers;

export type State = ReturnType<typeof reducers>