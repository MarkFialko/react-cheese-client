import {Dispatch} from "redux";
import {BasketActions, BasketActionTypes} from "../reducers/basketReducer";
import BasketService from "../../service/BasketService";

export const getAll = () => {
    return async (dispatch: Dispatch<BasketActions>) => {
        try {
            dispatch({type: BasketActionTypes.BASKET})
            const response = await BasketService.getAll();

            dispatch({type: BasketActionTypes.BASKET_SUCCESS, payload: response.data.basket})

            return Promise.resolve()

        } catch (e: any) {
            dispatch({type: BasketActionTypes.BASKET_ERROR, payload: e.response.data.message})
        }
    }

}

export const create = (ingredientId: string) => {
    return async (dispatch: Dispatch<BasketActions>) => {
        try {
            dispatch({type: BasketActionTypes.BASKET})
            const response = await BasketService.add(ingredientId);

            dispatch({type: BasketActionTypes.BASKET_SUCCESS, payload: response.data.basket})

            const basketArray = Array.from(response.data.basket)

            let title = ''

            for (let i = 0; i < basketArray.length; i++) {
                // @ts-ignore
                if (basketArray[i].ingredient._id === ingredientId) {
                    // @ts-ignore
                    title = basketArray[i].ingredient.title
                }
            }

            return Promise.resolve(`товар ${title} успешно добавлен`)

        } catch (e: any) {
            dispatch({type: BasketActionTypes.BASKET_ERROR, payload: e.response.data.message})
            return Promise.reject(e.response.data.message)
        }
    }

}


export const remove = (ingredientId: string) => {
    return async (dispatch: Dispatch<BasketActions>) => {
        try {
            dispatch({type: BasketActionTypes.BASKET})
            const response = await BasketService.remove(ingredientId);

            dispatch({type: BasketActionTypes.BASKET_SUCCESS, payload: response.data.basket})

            return Promise.resolve('')

        } catch (e: any) {
            dispatch({type: BasketActionTypes.BASKET_ERROR, payload: e.response.data.message})
            return Promise.reject(e.response.data.message)
        }
    }

}


