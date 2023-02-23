import {IUser} from "../../models/User";

export const enum AuthActionTypes {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    REGISTER = "REGISTER",
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    REGISTER_ERROR = "REGISTER_ERROR",
    LOGOUT = "LOGOUT"
}

export interface AuthState {
    isAuth: boolean;
    isLoading: boolean
    user: IUser,
    error: string
}

interface LoginAction {
    type: AuthActionTypes.LOGIN
}

interface LoginActionSuccess {
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: IUser
}

interface LoginActionError {
    type: AuthActionTypes.LOGIN_ERROR,
    payload: string
}

interface RegisterAction {
    type: AuthActionTypes.REGISTER
}

interface RegisterActionSuccess {
    type: AuthActionTypes.REGISTER_SUCCESS,
    payload: IUser
}

interface RegisterActionError {
    type: AuthActionTypes.REGISTER_ERROR,
    payload: string
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT
}


export type AuthAction =
    LoginAction
    | LoginActionSuccess
    | LoginActionError
    | RegisterAction
    | RegisterActionSuccess
    | RegisterActionError
    | LogoutAction


const defaultState: AuthState = {
    isAuth: false,
    isLoading: false,
    user: {} as IUser,
    error: ''
}

export const authReducer = (state = defaultState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {isAuth: false, user: {} as IUser, isLoading: true, error: ''}
        case AuthActionTypes.LOGIN_SUCCESS:
            return {isLoading: false, error: '', isAuth: true, user: action.payload}
        case AuthActionTypes.LOGIN_ERROR:
            return {user: {} as IUser, isLoading: false, isAuth: false, error: action.payload}
        case AuthActionTypes.REGISTER:
            return {isAuth: false, user: {} as IUser, error: '', isLoading: true}
        case AuthActionTypes.REGISTER_SUCCESS:
            return {isAuth: true, error: '', isLoading: false, user: action.payload}
        case AuthActionTypes.REGISTER_ERROR:
            return {user: {} as IUser, isAuth: false, isLoading: false, error: action.payload}
        case AuthActionTypes.LOGOUT:
            return {user: {} as IUser, isLoading: false, error: '', isAuth: false}

        default:
            return state
    }
}