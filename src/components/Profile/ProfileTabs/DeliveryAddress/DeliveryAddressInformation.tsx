import React from 'react';
import MyProfileInfoItem from "../MyProfile/MyProfileInfoItem";
import {useAppSelector} from "../../../../hooks/useAppSelector";

const DeliveryAddressInformation = () => {
    const {user} = useAppSelector(state => state.userInfo)

    return (
        <div className={`flex gap-2 flex-col `}>
            <MyProfileInfoItem title={'Адресс доставки'}
                               value={user?.address?.street ? user.address.street : 'Не указан'}/>
            <MyProfileInfoItem title={'Город'} value={user?.address?.city}/>
            <MyProfileInfoItem title={'Страна'} value={user?.address?.country}/>

        </div>
    );
};

export default DeliveryAddressInformation;