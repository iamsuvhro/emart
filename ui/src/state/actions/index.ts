interface AuthLoginAction {
    type:"authLogin"
    payload:Boolean
}

interface AuthLogoutAction {
    type:"authLogout"
    payload: Boolean
}

export type Action = AuthLoginAction | AuthLogoutAction
