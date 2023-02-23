import React, {ReactNode, useEffect} from 'react';
import Container from "../components/BuildComponents/Container";
import ProfileTabs from "../components/Profile/ProfileTabs/ProfileTabs";
import user from '../assets/user.svg'
import deliveryAddress from '../assets/deliveryAddress.svg'
import exit from '../assets/exit.svg'
import MyProfile from "../components/Profile/ProfileTabs/MyProfile/MyProfile";
import DeliveryAddress from "../components/Profile/ProfileTabs/DeliveryAddress/DeliveryAddress";
import {getMe} from "../store/actions/userAction";
import {useAppDispatch} from "../hooks/useAppDispatch";

export interface Tab {
    image: string,
    title: string,
    component?: ReactNode
    link?: string
}


export const ProfileTab = () => {
    return <div>PROFILE TAB</div>
}

const list: Tab[] = [
    {
        image: user,
        title: 'Мой профиль',
        component: <MyProfile/>
    },
    /* {
         image: bag,
         title: 'Мои заказы',
         component: <div> Мои заказы </div>
     },
     {
         image: like,
         title: 'Избранные товары',
         component: <div>Избранные товары</div>
     },*/

    {
        image: deliveryAddress,
        title: 'Адрес доставки',
        component: <DeliveryAddress/>
    },

    /*{
        image: password,
        title: 'Сменить пароль',
        component: <div>Сменить пароль</div>
    },*/
    {
        image: exit,
        title: 'Выход',
        link: '/',
    }
]

const ProfilePage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [])

    return (
        <>
            <Container>
                <div className={`py-5`}>
                    <div className={`flex flex flex-col`}>
                        <h1 className={`text-dark mb-6 text-[25px] font-bold`}>Личный кабинет</h1>
                    </div>
                    <ProfileTabs list={list}/>
                </div>
            </Container>

        </>
    );
};

export default ProfilePage;