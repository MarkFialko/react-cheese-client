import React, {useRef, useState} from 'react';
import cart from "../../assets/cart.svg"
import CartMenu from "./CartMenu";
import {useAppSelector} from "../../hooks/useAppSelector";
import SkeletonCart from "./SkeletonCart";
import {useOutsideClick} from "../../hooks/useOutsideClick";


const getCartCost = (basket: any) => {
    if (basket.length > 0) {
        return basket.reduce((acc: number, {ingredient, count}: any) => {
            return acc + (ingredient.price) * count
        }, 0)
    }
    return '0'
}

const getCartCount = (basket: any) => {
    if (basket.length > 0) {
        return basket.reduce((acc: number, {_, count}: any) => {
            return acc + count
        }, 0)
    }
    return '0'
}

const Cart = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {isLoading, error, basket} = useAppSelector(state => state.basket)

    const cartRef = useRef(null)

    useOutsideClick(cartRef, () => setIsOpen(false), isOpen)

    return (
        isLoading
            ? <SkeletonCart/>
            : <div ref={cartRef} onClick={() => setIsOpen(!isOpen)}
                   className={` relative  flex text-dark text-[14px] items-center gap-[15px]`}>
                <div className={` hidden mdms:flex flex-col items-end`}>
                    <p className={`cursor-pointer`}>Ваша корзина</p>
                    <p className={` cursor-pointer text-orange`}> {getCartCost(basket)} руб.</p>
                </div>
                <div
                    className={`${isOpen ? 'rotate-45' : 'rotate-0'} duration-[200ms] flex items-center justify-center relative`}>
                    <img src={cart} className={`w-10 cursor-pointer h-10 mdms:w-11 mdms:h-11`} alt=""/>
                    <div
                        className={`w-[16px] h-[16px] bg-orange text-[12px] flex justify-center items-center rounded-full text-white  absolute top-0 right-[-3px]`}>
                        {getCartCount(basket)}
                    </div>
                </div>
                <CartMenu count={getCartCount(basket)} price={getCartCost(basket)} isOpen={isOpen}/>
            </div>
    );
};

export default Cart;