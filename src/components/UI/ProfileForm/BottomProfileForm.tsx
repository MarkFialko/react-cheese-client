import React, {FC} from 'react';
import {Link} from "react-router-dom";

type BottomProfileFormProps = {
    isRegistration: boolean,
}

const BottomProfileForm: FC<BottomProfileFormProps> = ({isRegistration}) => {
    return (
        <div
            className={`w-full mt-5 pt-5 border-t border-t-lightGray flex justify-center items-center flex-wrap gap-[8px]`}>
            <p className={`flex items-center`}>У вас {isRegistration ? "есть профиль" : 'нет профиля'}? </p>
            {isRegistration &&
                <Link
                    to='/login'
                    className={`text-center text-[16px] text-orange underline`}>Войти в аккаунт</Link>}
            {!isRegistration &&
                <Link
                    to='/registration'
                    className={`text-center text-[16px] text-orange underline`}>Создайте аккаунт</Link>}
        </div>
    );
};

export default BottomProfileForm;