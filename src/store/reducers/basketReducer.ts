export const enum BasketActionTypes {
    BASKET = "BASKET",
    BASKET_SUCCESS = "BASKET_SUCCESS",
    BASKET_ERROR = "BASKET_ERROR",
}

export interface BasketState {
    isLoading: boolean
    basket: any,
    error: string
}

interface BasketAction {
    type: BasketActionTypes.BASKET
}

interface BasketActionSuccess {
    type: BasketActionTypes.BASKET_SUCCESS,
    payload: any
}

interface BasketActionError {
    type: BasketActionTypes.BASKET_ERROR,
    payload: string
}

export type BasketActions =
    BasketAction
    | BasketActionSuccess
    | BasketActionError

const defaultState: BasketState = {
    isLoading: false,
    basket: {} as any,
    error: ''
}

export const basketReducer = (state = defaultState, action: BasketActions): BasketState => {
    switch (action.type) {
        case BasketActionTypes.BASKET:
            return {basket: {} as any, isLoading: true, error: ''}
        case BasketActionTypes.BASKET_SUCCESS:
            return {isLoading: false, error: '', basket: action.payload}
        case BasketActionTypes.BASKET_ERROR:
            return {basket: {} as any, isLoading: false, error: action.payload}
        default:
            return state
    }
}