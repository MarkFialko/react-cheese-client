import React from 'react';
import RegistrationInfoItem from "./RegistrationInfoItem";
import gift from "../../assets/gift.png";
import garanty from "../../assets/garanty.png";
import credit from "../../assets/credit.png";


const RegistrationLeft = () => {
    return (
        <div
            className={`  mdt:w-1/2 w-full duration-500 transition-all  flex-col flex flex-shrink-0 m-auto mdt:m-0 p-5 mdt:p-[40px] bg-orangeForm`}
        >
            <h2 className={`font-bold text-[22px] mb-2`}> Регистрация аккаунта</h2>
            <p className={`text-[15px]`}>Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте
                скидки.</p>
            <div className={`flex mdt:mt-[40px] mt-5 flex-col items-start gap-[20px]`}>

                <RegistrationInfoItem title={'Возвращаем 10% бонусами'} image={gift}
                                      description={'При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по всей Россиию'}/>
                <RegistrationInfoItem title={'Гарантия качества'} image={garanty}
                                      description={'При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по всей Россиию'}/>
                <RegistrationInfoItem title={'Удобные способы оплаты'} image={credit}
                                      description={'При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется бесплатная доставка по всей Россиию'}/>
            </div>
        </div>
    );
};

export default RegistrationLeft;