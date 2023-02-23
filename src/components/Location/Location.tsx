import React, {useEffect, useRef, useState} from "react";
import {IoLocationOutline} from "react-icons/io5";
import {MdKeyboardArrowDown} from "react-icons/md";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import SkeletonLocation from "./SkeletonLocation";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {update} from "../../store/actions/userAction";

const Location = ({city = 'Москва', cities}: { city?: string, cities: Array<string> }) => {

    const dispatch = useAppDispatch()
    const {isLoading, isAuth} = useAppSelector(state => state.auth)
    const {user} = useAppSelector(state => state.userInfo)

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedCity, setSelectedCity] = useState<string>(city);
    const locationRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isAuth) {
            setSelectedCity("Москва")
            return
        }
        if (user?.address?.city) {
            setSelectedCity(user?.address?.city)
        }
    }, [isAuth, user])

    useOutsideClick(locationRef, () => setIsOpen(false), isOpen)

    return (
        isLoading && localStorage.getItem("token") && !isAuth
            ? <SkeletonLocation/>
            : <div onClick={() => setIsOpen(!isOpen)}
                   className={`cursor-pointer group flex items-center gap-2 text-dark `}>
                <IoLocationOutline size={25}/>
                <div
                    ref={locationRef}
                    className={`relative text-[14px] flex items-center gap-[3px] `}>
                    <p className={`group-hover:text-orange flex items-center gap-1 duration-500`}>
                        <span className={`mdt:flex hidden`}>Ваш город:</span>
                        <span
                            className={`truncate max-w-[100px] mdms:max-w-full mdms:text-clip`}
                        >{selectedCity}</span>
                    </p>
                    <MdKeyboardArrowDown
                        className={` ${isOpen ? 'rotate-180' : 'rotate-0'} group-hover:text-orange  duration-500 mt-[4px]`}
                        size={20}/>
                    <ul className={`transition-all z-10 duration-500 ${isOpen ? 'opacity-100 visible' : 'invisible opacity-0'} shadow-md flex bg-white  rounded-[5px] overflow-x-hidden overflow-y-auto absolute top-full left-0 flex-col`}>
                        {cities.map(cityItem => (
                            <li
                                key={cityItem}
                                onClick={() => {
                                    if (isAuth) {
                                        dispatch(update({city: cityItem}))
                                            .then(() => setSelectedCity(cityItem))
                                        return
                                    }
                                    setSelectedCity(cityItem)
                                    setIsOpen(false)
                                }
                                }
                                className={`p-2 ${cityItem === selectedCity ? 'bg-orangeLight text-orange' : ''} whitespace-nowrap transition-all text-dark hover:bg-orangeLight hover:text-orange`}>{cityItem}</li>
                        ))}
                    </ul>
                </div>
            </div>
    )
}


export default Location;