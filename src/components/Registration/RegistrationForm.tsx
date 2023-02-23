import React from 'react';
import Button from "../UI/Button";

import {useForm} from 'react-hook-form'

import {registration} from "../../store/actions/authAction";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useNavigate} from "react-router-dom";
import FormInput from "../UI/FormComponents/FormInput";
import Form from "../UI/FormComponents/Form";
import {toastAnswerCreator} from "../../utils/toastAnswerCreator";

export type RegistrationFormFields = {
    fullName: string,
    email: string,
    password: string,
    passwordRepeat: string,
}

const RegistrationForm = () => {

    const dispatch = useAppDispatch()
    const {isAuth} = useAppSelector(state => state.auth)

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}, watch} = useForm<RegistrationFormFields>({
        mode: 'onTouched'
    });

    const registrationOptions = {
        fullName: {
            required: 'Поле обязательно к заполнению',
            pattern: {
                value: /^\S+ \S+$/,
                message: "Введите имя и фамилию через пробел"
            },
        },
        email: {
            required: "Поле обязательно к заполнению",
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Введите валидный email'
            }
        },
        password: {
            required: "Поле обязательно к заполнению",
            minLength: {
                value: 5,
                message: "Пароль должен содержать минимум 5 символов"
            }
        },
        passwordRepeat: {
            required: "Поле обязательно к заполнению",
            validate: (value: string) => {
                if (watch('password') !== value) {
                    return 'Пароли должны совпадать'
                }
            }
        }
    }

    const registrationHandler = (data: RegistrationFormFields) => {
        if (!isAuth) {
            const response = dispatch(registration(data))

            response.then(() => navigate('/profile'))
            toastAnswerCreator(response, 'Успешная регистрация')
        }
    }

    return (
        <Form
            onSubmit={handleSubmit(registrationHandler)}
        >
            <FormInput<RegistrationFormFields>
                name={"fullName"}
                label='Ваше имя и фамилия'
                placeholder="Владимир Иванов"
                register={register}
                rules={registrationOptions.fullName}
                errors={errors}
            />

            <FormInput
                name={"email"}
                label='Электронная почта'
                placeholder="yourname@mail.com"
                register={register}
                rules={registrationOptions.email}
                errors={errors}
            />
            <div className={`flex flex-col mdt:flex-row items-start gap-[15px]`}>
                <div className={`flex w-full mdt:w-1/2 flex-col items-start gap-[10px]`}>
                    <FormInput
                        name={"password"}
                        register={register}
                        rules={registrationOptions.password}
                        errors={errors}
                        type='password'
                        label='Введите пароль'
                        placeholder="От 5 и более символов"
                    />
                </div>
                <div className={`flex w-full mdt:w-1/2 flex-col items-start gap-[10px]`}>
                    <FormInput
                        name={"passwordRepeat"}
                        register={register}
                        rules={registrationOptions.passwordRepeat}
                        errors={errors}
                        type='password'
                        label='Подтвердите пароль'
                        placeholder="Повторите пароль"
                    />
                </div>
            </div>
            <Button classes={`mt-[10px]`} type="submit">Создать аккаунт</Button>
        </Form>
    );
};

export default RegistrationForm;