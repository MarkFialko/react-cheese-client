import React from 'react';
import {Link} from "react-router-dom";

const LoginRight = () => {
    return (
        <div
            className={` mdt:translate-x-[-100%]'}  min-h-[200px]  mdt:w-1/2 transition-all duration-500  flex w-full items-center flex-col flex flex-shrink-0  justify-center m-auto mdt:m-0 p-5 mdt:p-[40px] bg-orangeForm`}
        >
            <div className={`flex items-center flex-col`}>
                <h2 className={`font-bold flex text-center items-center justify-center text-[22px] mb-2`}> Создайте
                    аккаунт</h2>
                <p className={`items-center text-center justify-center text-[15px]`}>Делайте покупки быстро и
                    удобно, отслеживайте статус заказа и получайте скидки.</p>
                <Link
                    to={'/registration'}
                    className={`p-3 rounded-[5px] text-orange border border-orange items-center inline-flex mt-6`}>Зарегестрироваться
                </Link>
            </div>
        </div>
    );
};

export default LoginRight;