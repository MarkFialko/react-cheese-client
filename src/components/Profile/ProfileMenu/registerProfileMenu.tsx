import React, {FC} from 'react';
import {Link} from "react-router-dom";
import login from "../../../assets/login.svg";

type RegisterProfileMenuProps = {
    isOpen: boolean,
    onClose: () => void
}

const RegisterProfileMenu: FC<RegisterProfileMenuProps> = ({isOpen, onClose}) => {

    return (
        <>
            <p className={`hidden duration-500 mdms:flex`}>Войти в аккаунт</p>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} duration-500 w-full shadow-md z-10 min-w-[210px] text-dark  absolute top-full right-0 mt-2 rounded-[5px] bg-white w-auto flex-col flex flex-nowrap items-start`}>
                <Link
                    to='/login'
                    onClick={onClose}
                    className={`cursor-pointer duration-500 w-full text-dark h-full flex relative flex-nowrap whitespace-nowrap hover:bg-orangeLight  hover:text-orange justify-between items-center  flex w-full p-2`}
                ><span>Войти</span>
                    <img
                        className={`h-5 w-5`}
                        src={login}
                        alt=""
                    />
                </Link>
                <Link
                    to='/registration'
                    onClick={onClose}
                    className={`cursor-pointer duration-500 w-full text-dark h-full flex relative flex-nowrap whitespace-nowrap hover:bg-orangeLight  hover:text-orange justify-between items-center  flex w-full p-2`}
                ><span>Зарегестрироваться</span>
                    <img
                        className={`h-5 w-5`}
                        src={login}
                        alt=""
                    />
                </Link>

            </div>
        </>
    );
};

export default RegisterProfileMenu;