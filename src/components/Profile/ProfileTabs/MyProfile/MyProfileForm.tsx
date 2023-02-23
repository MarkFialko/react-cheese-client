import React from 'react';
import FormInput from "../../../UI/FormComponents/FormInput";
import Button from "../../../UI/Button";
import {ProfileFields} from "./MyProfile";
import {useForm} from "react-hook-form";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {update} from "../../../../store/actions/userAction";
import Form from "../../../UI/FormComponents/Form";
import {toastAnswerCreator} from "../../../../utils/toastAnswerCreator";

const MyProfileForm = ({onSubmit}: { onSubmit: (flag: boolean) => void }) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.userInfo)

    const {register, handleSubmit, formState: {errors}} = useForm<ProfileFields>()

    const onSubmitHandler = (data: ProfileFields) => {
        const response = dispatch(update(data))

        toastAnswerCreator(response, 'Данные успешно обновлены')
        response.then(() => onSubmit(false))
    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmitHandler)}
            classes={` max-w-[400px]`}
        >
            <FormInput<ProfileFields>
                name='phone'
                label='Телефон'
                defaultValue={user?.phone ? user.phone : ''}
                rules={{
                    pattern: {
                        value: /\+7-\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/,
                        message: "Формат телефона: +7-(ххх)-ххх-хх-хх"
                    }
                }}
                placeholder={'Телефон'}
                register={register}
                errors={errors}
            />
            <Button classes={`mt-[10px]`} type={'submit'}>Изменить</Button>
        </Form>
    );
};

export default MyProfileForm;