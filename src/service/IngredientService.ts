import $api from "../http";
import {AxiosResponse} from "axios";
import {IIngredient} from "../models/Ingredient";
import {IngredientResponse} from "../models/response/IngredientResponse";

export default class IngredientService {
    static async create({title, price, imageUrl}: IIngredient): Promise<AxiosResponse<IIngredient>> {
        return $api.post<IIngredient>('/ingredient', {title, price, imageUrl})
    }

    static async getAll() {
        return $api.get<IngredientResponse>('/ingredient')
    }

}