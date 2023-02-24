import {RegistrationFormFields} from "../../components/Registration/RegistrationForm";
import AuthService from "../../service/AuthService";
import {AuthAction, AuthActionTypes} from "../reducers/authReducer";
import {LoginFormFields} from "../../components/Login/LoginForm";
import {Dispatch} from "redux";
import axios from "axios";
import {AuthResponse} from "../../models/response/AuthResponse";
import {API_URL} from "../../http";
import {BasketActions, BasketActionTypes} from "../reducers/basketReducer";
import BasketService from "../../service/BasketService";

export const registration = (data: RegistrationFormFields) => {
    const {fullName, email, password} = data

    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.REGISTER})
            const response = await AuthService.registration(fullName, email, password);


            dispatch({type: AuthActionTypes.REGISTER_SUCCESS, payload: response.data.user})


            localStorage.setItem("token", response.data.accessToken)

            return Promise.resolve(response.data.user.fullName)

        } catch (e: any) {
            dispatch({type: AuthActionTypes.REGISTER_ERROR, payload: e.response.data.message})

            return Promise.reject(e.response.data.message)
        }
    }

}

export const login = (data: LoginFormFields) => {
    const {email, password} = data

    return async (dispatch: Dispatch<AuthAction | BasketActions>) => {
        try {
            dispatch({type: AuthActionTypes.LOGIN})
            const response = await AuthService.login(email, password);

            dispatch({type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data.user})


            localStorage.setItem("token", response.data.accessToken)

            try {
                dispatch({type: BasketActionTypes.BASKET})
                const response = await BasketService.getAll();

                dispatch({type: BasketActionTypes.BASKET_SUCCESS, payload: response.data.basket})

            } catch (e: any) {
                dispatch({type: BasketActionTypes.BASKET_ERROR, payload: e.response.data.message})
            }

            return Promise.resolve(response.data.user.fullName)

        } catch (e: any) {
            dispatch({type: AuthActionTypes.LOGIN_ERROR, payload: e.response.data.message})

            return Promise.reject(e.response.data.message)
        }
    }
}

export const logout = () => {

    return async (dispatch: Dispatch<AuthAction | BasketActions>) => {
        dispatch({type: AuthActionTypes.LOGOUT})
        localStorage.removeItem("token")
        dispatch({type: BasketActionTypes.BASKET_ERROR, payload: ''})
    }
}

export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.LOGIN})

            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})

            const user = response.data.user

            dispatch({type: AuthActionTypes.LOGIN_SUCCESS, payload: user})

            localStorage.setItem("token", response.data.accessToken)

        } catch (e: any) {
            dispatch({type: AuthActionTypes.LOGIN_ERROR, payload: e.response.data.message})

        }
    }
}

