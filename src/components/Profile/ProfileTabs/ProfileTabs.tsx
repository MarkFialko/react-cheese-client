import React, {FC, useState} from 'react';
import {Tab} from "../../../pages/ProfilePage";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {logout} from "../../../store/actions/authAction";
import {useNavigate} from "react-router-dom";

export interface ProfileTabsProps {
    list: Tab[]
}

const ProfileTabs: FC<ProfileTabsProps> = ({list}) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState<string>(list[0].title)

    const tabHandler = (title: string, link: string | undefined) => {
        if (link) {
            dispatch(logout())
            navigate("/")
            return
        }
        setActiveTab(title)
    }

    return (
        <>
            <div
                className={`flex relative overflow-x-scroll`}
            >
                {list.map(({image, title, link}) =>
                    <div key={title} className={` flex flex-shrink-0 items-center`}>
                        <button
                            onClick={() => tabHandler(title, link)}
                            className={`flex items-center ${activeTab === title ? 'bg-white' : ''}  text-[14px] p-[14px] text-dark gap-[5px]`}
                        >
                            <img src={image} alt=""/>
                            <span>{title}</span>
                        </button>
                    </div>
                )}
            </div>
            <div
                className={`p-[15px] mdt:p-10 bg-white rounded-[5px] w-full`}
            >
                {list.map(({title, component}) => (
                    <div key={title}>
                        {title === activeTab ? component : null}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProfileTabs;