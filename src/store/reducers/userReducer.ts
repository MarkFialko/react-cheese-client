import {IUser} from "../../models/User";

export const enum UserActionTypes {
    GET_USER = "GET_USER",
    GET_USER_SUCCESS = "GET_USER_SUCCESS",
    GET_USER_ERROR = "GET_USER_ERROR",
    UPDATE = "UPDATE",
    UPDATE_SUCCESS = "UPDATE_SUCCESS",
    UPDATE_ERROR = "UPDATE_ERROR",
}

export interface UserState {
    isLoading: boolean
    user: IUser,
    error: string
}

interface UpdateAction {
    type: UserActionTypes.UPDATE,
}

interface UpdateActionSuccess {
    type: UserActionTypes.UPDATE_SUCCESS,
    payload: IUser
}

interface UpdateActionError {
    type: UserActionTypes.UPDATE_ERROR,
    payload: string
}

interface GetUserAction {
    type: UserActionTypes.GET_USER,
}

interface GetUserActionSuccess {
    type: UserActionTypes.GET_USER_SUCCESS,
    payload: IUser
}

interface GetUserActionError {
    type: UserActionTypes.GET_USER_ERROR,
    payload: string
}

export type UserAction =
    UpdateAction
    | UpdateActionSuccess
    | UpdateActionError
    | GetUserAction
    | GetUserActionSuccess
    | GetUserActionError


const defaultState: UserState = {
    isLoading: false,
    user: {} as IUser,
    error: ''
}

export const userReducer = (state = defaultState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.UPDATE:
            return {user: {} as IUser, error: '', isLoading: true}
        case UserActionTypes.UPDATE_SUCCESS:
            return {error: '', isLoading: false, user: action.payload}
        case UserActionTypes.UPDATE_ERROR :
            return {user: {} as IUser, isLoading: false, error: action.payload}
        case UserActionTypes.GET_USER:
            return {user: {} as IUser, error: '', isLoading: true}
        case UserActionTypes.GET_USER_SUCCESS:
            return {error: '', isLoading: false, user: action.payload}
        case UserActionTypes.GET_USER_ERROR :
            return {user: {} as IUser, isLoading: false, error: action.payload}

        default:
            return state
    }
}