import React, {FC} from 'react';
import Button from "../UI/Button";

type CartMenuProps = {
    isOpen: boolean
}

const CartMenu: FC<CartMenuProps> = ({isOpen}) => {
    return (
        <div onClick={(e) => e.stopPropagation()}
             className={` ${isOpen ? "opacity-100 visible" : 'opacity-0 invisible'} py-[30px] rounded-[5px] overflow-hidden z-10 w-[460px] duration-500 text-dark bg-white shadow-md px-5 absolute top-full mt-4 right-0`}>
            <h3 className={`uppercase text-[22px]`}>Корзина (5)</h3>
            <ul className={`w-full border-y-lightGray py-6`}>
            </ul>
            <div className={` my-6 flex items-start flex-col gap-[10px]`}>
                <div className={`flex text-[16px] w-full font-bold justify-between items-center `}>
                    <p>Товаров в корзине</p>
                    <p>5 шт.</p>
                </div>
                <div className={`flex text-[16px] w-full font-bold justify-between items-center `}>
                    <p>Общая стоимость</p>
                    <p>1680 руб.</p>
                </div>
            </div>
            <Button classes={`w-full h-12`}>Оформить заказ</Button>
        </div>
    );
};

export default CartMenu;