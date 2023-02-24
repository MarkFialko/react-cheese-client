import React, {FC, useEffect, useState} from 'react';
import Button from "../UI/Button";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {remove} from "../../store/actions/basketAction";
import {toast} from "react-toastify";

type CartMenuProps = {
    isOpen: boolean,
    price: string,
    count: string
}

const CartMenu: FC<CartMenuProps> = ({isOpen, price, count}) => {

    const {isLoading, error, basket} = useAppSelector(state => state.basket)

    const dispatch = useAppDispatch()

    const {isAuth} = useAppSelector(state => state.auth)

    const [basketItems, setBasketItems] = useState(basket)

    useEffect(() => {
        setBasketItems(basket)
    }, [basket])

    useEffect(()=> {
        if (!isAuth) {
            setBasketItems([])
        }
        setBasketItems(basket)
    },[isAuth])

    const deleteHandler = (id:string) => {
        dispatch(remove(id))
            .then(() => {
                toast('Товар успешно удалён!')
            })
    }

    return (
        <div onClick={(e) => e.stopPropagation()}
             className={` ${isOpen ? "opacity-100 visible" : 'opacity-0 invisible'} py-[30px] rounded-[5px] overflow-hidden z-10 w-[460px] duration-500 text-dark bg-white shadow-md px-5 absolute top-full mt-4 right-0`}>
            <h3 className={`uppercase text-[22px] pb-4`}>Корзина ({count})</h3>
            <ul className={`w-full max-h-[220px] overflow-hidden overflow-y-auto flex flex-col gap-[10px]`}>
                {basketItems.length > 0 && basketItems.map(({ingredient, count}: any) => (
                    <div key={ingredient.title} className={` py-6 border-b border-b-lightGray flex gap-[30px] `}>
                        <img className={`h-[90px] w-[90px] border rounded-[6px] border-lightGray`}
                             src={ingredient.imageUrl} alt=""/>
                        <div className={`flex w-full justify-between flex-col`}>
                            <div className={`flex flex items-center justify-between`}>
                                <p className={`font-bold`}>{ingredient.title}</p>
                                <button
                                    onClick={() =>deleteHandler(ingredient._id)}
                                    className={`h-5 p-2 rounded-[6px] flex items-center justify-center text-white bg-warning`}>Удалить</button>
                            </div>
                            <div className={`flex flex justify-between`}>
                                <p>{count} шт.</p>
                                <p className={`font-bold`}>{ingredient.price} руб.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
            <div className={` my-6 flex items-start flex-col gap-[10px]`}>
                <div className={`flex text-[16px] w-full font-bold justify-between items-center `}>
                    <p>Товаров в корзине</p>
                    <p>{count} шт.</p>
                </div>
                <div className={`flex text-[16px] w-full font-bold justify-between items-center `}>
                    <p>Общая стоимость</p>
                    <p>{price} руб.</p>
                </div>
            </div>
            <Button classes={`w-full h-12`}>Оформить заказ</Button>
        </div>
    );
};

export default CartMenu;