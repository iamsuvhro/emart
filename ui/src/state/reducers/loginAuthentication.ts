import {Action} from "../actions/index"

const reducer = (state: Boolean = false, action: Action) => {
    switch(action.type){
        case "authLogin":
            return state = action.payload
        case "authLogout":
            return state = action.payload
        default:
            return state = false
    }
}

export default reducer;