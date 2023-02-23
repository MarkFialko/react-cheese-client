import React from 'react';
import Button from "../UI/Button";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {login} from "../../store/actions/authAction";
import {toast} from "react-toastify";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useNavigate} from "react-router-dom";
import FormInput from "../UI/FormComponents/FormInput";
import Form from "../UI/FormComponents/Form";
import {toastAnswerCreator} from "../../utils/toastAnswerCreator";

export type LoginFormFields = {
    email: string,
    password: string
}

const LoginForm = () => {

    const {isAuth} = useAppSelector(state => state.auth)

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const {register, handleSubmit, formState: {errors}, reset} = useForm<LoginFormFields>({
        mode: 'onTouched'
    });

    const loginOptions = {
        email: {
            required: "Поле обязательно к заполнению",
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Введите валидный email'
            }
        },
        password: {
            required: "Поле обязательно к заполнению",
        }
    }

    const loginHandler = (data: LoginFormFields) => {
        if (!isAuth) {
            const response = dispatch(login(data))

            response.then(() => navigate('/profile'))
            toastAnswerCreator(response, 'Добро пожаловать')
        }
    }

    return (
        <>
            <Form
                onSubmit={handleSubmit(loginHandler)}
                classes={` justify-center flex-grow flex-shrink flex-auto`}
            >
                <FormInput
                    name={`email`}
                    errors={errors}
                    label={'Электронная почта'}
                    placeholder={"yourname@mail.com"}
                    register={register}
                    rules={loginOptions.email}
                />
                <FormInput
                    name={`password`}
                    register={register}
                    rules={loginOptions.password}
                    errors={errors}
                    type='password'
                    label={'Ваш пароль'}
                    placeholder={"От 5 и более символов"}
                />
                <Button type='submit' classes={`mt-[10px]`}>Войти</Button>
            </Form>
        </>
    );
};


export default LoginForm;