
import { Dispatch } from "redux"
import { json } from "stream/consumers"
import { Action } from "../actions/index"


export const authLogin = () => {
    return (dispatch: Dispatch<Action>) => {
        localStorage.setItem("authStatus",JSON.stringify(true))
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