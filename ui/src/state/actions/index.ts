interface AuthLoginAction {
    type:"authLogin"
    payload:boolean
}

interface AuthLogoutAction {
    type:"authLogout"
    payload: boolean
}

export type Action = AuthLoginAction | AuthLogoutAction
