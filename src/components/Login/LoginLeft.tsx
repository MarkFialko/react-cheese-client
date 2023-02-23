import React, {FC} from 'react';
import LoginForm from "./LoginForm";
import BottomProfileForm from "../UI/ProfileForm/BottomProfileForm";


const LoginLeft = () => {

    return (
        <div
            className={` transition-all duration-500  mdt:w-1/2 flex flex-shrink-0  p-5 w-full m-auto mdt:m-0 flex flex-col flex-auto flex-grow mdt:p-[40px] bg-white`}
        >
            <h2 className={`font-bold mb-[20px] text-[22px]`}>Постоянный покупатель</h2>
            <LoginForm/>
            <BottomProfileForm isRegistration={false}/>
        </div>
    );
};

export default LoginLeft;