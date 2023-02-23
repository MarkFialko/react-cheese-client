import React from 'react';
import {AiOutlineClockCircle} from "react-icons/ai";

const Clock = () => {

    return (
        <div className={`flex font-bold mdt:font-normal text-dark text-[14px] items-center gap-2`}>
            <AiOutlineClockCircle className={`text-[25px] mdt:text-[20px]`}/>
            <p>Пн-Пт 9:00 - 19:00</p>
        </div>
    );
};

export default Clock;