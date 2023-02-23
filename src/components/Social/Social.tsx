import React from 'react';
import tg from '../../assets/telegram.svg'
import wa from '../../assets/whatsUp.svg'
import mes from '../../assets/messenger.svg'
import Activities from "./Activities";
import SocialItem from "./SocialItem";


const Social = () => {

    return (
        <div className={`flex my-5 mdt:m-0 item-center gap-[20px]`}>
            <div className={`flex gap-[10px] items-center`}>
                <SocialItem src={tg}/>
                <SocialItem src={wa}/>
                <SocialItem src={mes}/>
            </div>
            <Activities/>
        </div>
    );
};

export default Social;