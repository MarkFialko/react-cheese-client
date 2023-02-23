import React from 'react';
import phone from '../../assets/phone.svg'

const Activities = () => {

    return (
        <div className={`flex flex-col gap-1 items-end`}>
            <a className={`font-bold text-[16px]`} href="tel:+8 916 460-19-60">+8 916 460-19-60</a>
            <button
                className={`flex outline-none items-center gap-[10px] border rounded-[5px] py-1 px-[6px] border-orange`}>
                <img src={phone} alt=""/>
                <p className={`text-orange`}>Заказать звонок</p>
            </button>
        </div>
    );
};

export default Activities;