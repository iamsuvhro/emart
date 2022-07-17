
import { Dispatch } from "redux"
import { Action } from "../actions/index"


export const authLogin = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'authLogin',
            payload: true
        })
    }
}
export const authLogout = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: "authLogout",
            payload:false
        })
    }
}