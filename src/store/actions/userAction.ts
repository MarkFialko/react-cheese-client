import {Dispatch} from "redux";
import UserService from "../../service/UserService";
import {UserAction, UserActionTypes} from "../reducers/userReducer";

export interface IUpdateUserData {
    phone?: string,
    city?: string,
    country?: string,
    street?: string,
}

export const update = (data: IUpdateUserData) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.UPDATE})

            const response = await UserService.update(data)
            console.log(data)
            const user = response.data.user
            console.log(user)
            dispatch({type: UserActionTypes.UPDATE_SUCCESS, payload: user})

            return Promise.resolve(user.fullName)

        } catch (e: any) {
            dispatch({type: UserActionTypes.UPDATE_ERROR, payload: e.response.data.message})

            return Promise.reject(e.response.data.msg)
        }
    }
}

export const getMe = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.GET_USER})

            const response = await UserService.getMe()

            const user = response.data.user
            console.log(user)
            dispatch({type: UserActionTypes.GET_USER_SUCCESS, payload: user})

            return Promise.resolve()

        } catch (e: any) {
            dispatch({type: UserActionTypes.GET_USER_ERROR, payload: e.response.data.message})

        }
    }
}
