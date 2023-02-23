import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {IUpdateUserData} from "../store/actions/userAction";

export default class UserService {
    static async getMe(): Promise<AxiosResponse<AuthResponse>> {
        return $api.get<AuthResponse>('auth/me')
    }

    static async update(data: IUpdateUserData) {
        return $api.post<AuthResponse>('/auth/me', data)
    }

}