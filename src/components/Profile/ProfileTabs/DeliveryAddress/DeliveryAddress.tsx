import React, {useState} from 'react';
import {useAppSelector} from "../../../../hooks/useAppSelector";
import DeliveryAddressInformation from "./DeliveryAddressInformation";
import DeliveryAddressForm from "./DeliveryAddressForm";

const DeliveryAddress = () => {
    const {user, isLoading} = useAppSelector(state => state.userInfo)

    const [isReadyForEdit, setIsReadyForEdit] = useState(false)

    return (
        isLoading
            ? <div>ЗАГРУЗКА</div>
            : <>
                <div className={`flex w-full justify-between flex-wrap mb-[20px] gap-[10px] items-center`}>
                    <h1
                        className={`text-[20px] font-bold `}
                    >{user.fullName}</h1>
                    <button
                        onClick={() => setIsReadyForEdit(!isReadyForEdit)}
                        className={`flex text-orange flex items-center underline`}
                    >{isReadyForEdit ? 'Отменить редактирование' : 'Редактировать информацию'}
                    </button>
                </div>
                {isReadyForEdit
                    ? <DeliveryAddressForm/>
                    : <DeliveryAddressInformation/>}
            </>
    );
};

export default DeliveryAddress;