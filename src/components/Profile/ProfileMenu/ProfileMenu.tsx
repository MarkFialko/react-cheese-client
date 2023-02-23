import React, {useRef, useState} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import user from "../../../assets/user.svg";
import AuthProfileMenu from "./authProfileMenu";
import RegisterProfileMenu from "./registerProfileMenu";
import SkeletonProfileMenu from "./SkeletonProfileMenu";

const ProfileMenu = () => {

    const profileMenuRef = useRef<HTMLDivElement>(null)
    const {isAuth, isLoading} = useAppSelector(state => state.auth)
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false)

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(isProfileMenuOpen => !isProfileMenuOpen)
    }

    useOutsideClick(profileMenuRef, () => setIsProfileMenuOpen(false), isProfileMenuOpen)

    return (
        isLoading && localStorage.getItem("token") && !isAuth
            ? <SkeletonProfileMenu/>
            : <div
                ref={profileMenuRef}
                onClick={toggleProfileMenu}
                className={`flex relative cursor-pointer hover:text-orange duration-200 items-center gap-[5px]`}>
                <img
                    className={`mdt:h-[18px] mdt:w-[18px] w-7 h-7`}
                    src={user}
                    alt=''
                />
                {isAuth
                    ? <AuthProfileMenu
                        isOpen={isProfileMenuOpen}
                        onClose={() => setIsProfileMenuOpen(false)}
                    />
                    : <RegisterProfileMenu
                        isOpen={isProfileMenuOpen}
                        onClose={() => setIsProfileMenuOpen(false)}
                    />
                }
            </div>
    )
}

export default ProfileMenu;