import React from 'react';
import RegistrationForm from "./RegistrationForm";
import BottomProfileForm from "../UI/ProfileForm/BottomProfileForm";

const RegistrationRight = () => {
    return (
        <div
            className={` transition-all duration-500 mdt:static mdt:opacity-100 mdt:visible  mdt:w-1/2 flex-col flex flex-shrink-0  p-5 w-full m-auto mdt:m-0 flex flex-col flex-auto flex-grow mdt:p-[40px] bg-white`}
        >
            <RegistrationForm/>
            <BottomProfileForm isRegistration={true}/>
        </div>
    );
};

export default RegistrationRight;