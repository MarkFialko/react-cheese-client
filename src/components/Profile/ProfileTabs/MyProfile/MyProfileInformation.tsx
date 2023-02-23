import React from 'react';
import {useAppSelector} from "../../../../hooks/useAppSelector";
import MyProfileInfoItem from "./MyProfileInfoItem";

const MyProfileInformation = () => {

    const {user} = useAppSelector(state => state.userInfo)

    return (
        <div className={`flex gap-2 flex-col `}>
            <MyProfileInfoItem title={'Телефон'} value={user.phone ? user.phone : 'Не указан'}/>
            <MyProfileInfoItem title={'Email'} value={user.email}/>
            <div className={`flex flex-wrap items-start`}>
                <p
                    className={`w-[200px] text-blackLight`}
                >Адрес доставки:</p>
                <p
                    className={`w-[250px]`}
                >{user?.address?.country}, <br/> {user?.address?.city}
                    {user?.address?.street ? `,` : ''}
                    <br/>
                    {user?.address?.street ? `${user?.address?.street}` : ''}
                </p>
            </div>
        </div>
    );
};

export default MyProfileInformation;