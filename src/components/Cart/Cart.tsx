import React, {useState} from 'react';
import cart from "../../assets/cart.svg"
import CartMenu from "./CartMenu";

const Cart = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const a = "hello world"
    return (
        <div onClick={() => setIsOpen(!isOpen)}
             className={` relative cursor-pointer flex text-dark text-[14px] items-center gap-[15px]`}>
            <div className={` hidden mdms:flex flex-col items-end`}>
                <p>Ваша корзина</p>
                <p className={`text-orange`}>1680 руб.</p>
            </div>
            <div
                className={`${isOpen ? 'rotate-45' : 'rotate-0'} duration-[200ms] flex items-center justify-center relative`}>
                <img src={cart} className={`w-10 h-10 mdms:w-11 mdms:h-11`} alt=""/>
                <div
                    className={`w-[16px] h-[16px] bg-orange text-[12px] flex justify-center items-center rounded-full text-white  absolute top-0 right-[-3px]`}>5
                </div>
            </div>
            <CartMenu isOpen={isOpen}/>
        </div>
    );
};

export default Cart;