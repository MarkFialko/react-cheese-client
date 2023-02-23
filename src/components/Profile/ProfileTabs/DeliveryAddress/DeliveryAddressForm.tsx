import React from 'react';
import FormInput from "../../../UI/FormComponents/FormInput";
import {ProfileFields} from "../MyProfile/MyProfile";
import Select from "../../../UI/Select/Select";
import Button from "../../../UI/Button";
import Form from "../../../UI/FormComponents/Form";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useForm} from "react-hook-form";
import {update} from "../../../../store/actions/userAction";
import {toastAnswerCreator} from "../../../../utils/toastAnswerCreator";

const countryOptions = [
    {name: "Российская Федерация", value: "Российская Федерация"}
]

const cityOptions = [
    {name: "Екатеринбург", value: "Екатеринбург"},
    {name: "Санкт-Петербург", value: "Санкт-Петербург"},
    {name: "Москва", value: "Москва"}
]


const DeliveryAddressForm = () => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.userInfo)

    const {control, register, handleSubmit, formState: {errors}} = useForm<ProfileFields>()


    const onSubmit = (data: ProfileFields) => {
        const response = dispatch(update(data))
        toastAnswerCreator(response, 'Данные успешно обновлены')
    }
    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            classes={` max-w-[400px]`}
        >
            <Select<ProfileFields>
                options={countryOptions}
                label={'Страна'}
                name='country'
                control={control}
                defaultValue={user.address?.country ? user.address.country : countryOptions[0].value}
            />
            <FormInput<ProfileFields>
                name='street'
                label='Улица'
                defaultValue={user.address?.street ? user.address.street : ''}
                placeholder={'Улица'}
                register={register}
                errors={errors}
            />
            <Select<ProfileFields>
                options={cityOptions}
                label={'Город'}
                name='city'
                control={control}
                defaultValue={user.address?.city ? user.address.city : cityOptions[0].value}
            />
            <Button classes={`mt-[10px]`} type={'submit'}>Изменить</Button>
        </Form>
    );
};

export default DeliveryAddressForm;