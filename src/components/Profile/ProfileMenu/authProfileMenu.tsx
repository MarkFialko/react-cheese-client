import React, {FC} from 'react';
import {userNameFormat} from "../../../utils/userNameFormat";
import {Link, useNavigate} from "react-router-dom";
import login from "../../../assets/login.svg";
import {logout} from "../../../store/actions/authAction";
import logoutIm from "../../../assets/logout.svg";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {RolesEnum} from "../../../enums/rolesEnum";


type AuthProfileMenuProps = {
    isOpen: boolean,
    onClose: () => void
}

const AuthProfileMenu: FC<AuthProfileMenuProps> = ({isOpen, onClose}) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth)

    const isAdmin = user.roles.includes(RolesEnum.Admin)

    return (
        <>
            <p className={`hidden duration-500 mdms:flex`}>{userNameFormat(user.fullName)}</p>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} duration-500 shadow-md z-10 min-w-[210px] w-full text-dark  absolute top-full right-0 mt-2 rounded-[5px] bg-white w-auto flex-col flex flex-nowrap items-start`}>
                <Link
                    to='/profile'
                    onClick={onClose}
                    className={`cursor-pointer duration-500 w-full text-dark h-full flex relative flex-nowrap whitespace-nowrap hover:bg-orangeLight  hover:text-orange justify-between items-center  flex w-full p-2`}
                ><span>Кабинет</span>
                    <img
                        className={`h-5 w-5`}
                        src={login}
                        alt=""
                    />
                </Link>
                {isAdmin &&
                    <Link
                        to='/admin'
                        onClick={onClose}
                        className={`cursor-pointer duration-500 w-full text-dark h-full flex relative flex-nowrap whitespace-nowrap hover:bg-orangeLight  hover:text-orange justify-between items-center  flex w-full p-2`}
                    ><span>Админ панель</span>
                        <img
                            className={`h-5 w-5`}
                            src={login}
                            alt=""
                        />
                    </Link>
                }
                <p
                    onClick={() => {
                        onClose()
                        dispatch(logout())
                        navigate('/')
                    }}
                    className={`cursor-pointer duration-500 w-full text-dark h-full flex relative flex-nowrap whitespace-nowrap hover:bg-orangeLight  hover:text-orange justify-between items-center  flex w-full p-2`}
                ><span>Выйти</span>
                    <img
                        className={`h-5 w-5`}
                        src={logoutIm}
                        alt=""
                    />
                </p>
            </div>
        </>
    );
};

export default AuthProfileMenu;