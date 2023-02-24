import $api from "../http";
import {AxiosResponse} from "axios";

export default class BasketService {
    static async add(ingredientId: string): Promise<AxiosResponse<any>> {
        return $api.post<any>(`basket/${ingredientId}`)
    }

    static async remove(ingredientId: string): Promise<AxiosResponse<any>> {
        return $api.delete<any>(`basket/${ingredientId}`)
    }

    static async getAll(): Promise<AxiosResponse<any>> {
        return $api.get<any>('/basket')
    }
}