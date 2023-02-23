import React, {ChangeEvent} from 'react';
import Container from "../components/BuildComponents/Container";
import Form from "../components/UI/FormComponents/Form";
import {useForm} from "react-hook-form";
import FormInput from "../components/UI/FormComponents/FormInput";
import Button from "../components/UI/Button";
import UploadService from "../service/UploadService";
import IngredientService from "../service/IngredientService";
import {API_URL} from "../http";
import {toast} from "react-toastify";

export type  IngredientFormFields = {
    price: number;
    title: string,
    imageUrl: string;
    files: any;
}

const AdminPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<IngredientFormFields>()

    const onSubmit = async (data: IngredientFormFields) => {
        try {
            const formData = new FormData()
            formData.append('image', data.files[0])

            const responseWithFileUrl = await UploadService.getFile(formData)

            toast("Загрузка изображения прошла успешно!!!")

            data.imageUrl = `${API_URL}${responseWithFileUrl.data.url}`

            const {files, ...dataToSend} = data

            const response = await IngredientService.create(dataToSend)

            toast("Добавлен новый ингредиент!!!", {
                type: "info"
            })


        } catch (e) {

        }
    }


    const createProductOptions = {
        title: {
            required: "Поле обязательно к заполнению",
            minLength: {
                value: 15,
                message: 'Название должно содержать минимум 15 символов'
            }
        },
        price: {
            required: "Поле обязательно к заполнению",
        },
        imageUrl: {
            required: "Поле обязательно к заполнению",
        }
    }

    return (
        <Container>
            <div className={` flex-col py-5`}>
                <div
                    className={`bg-white w-full max-w-[400px] inline-flex flex-col rounded-[6px] p-[15px]`}
                >
                    <h2
                        className={`text-[22px] font-bold mb-[20px]`}
                    >Добавить ингредиент</h2>
                    <Form
                        classes={`max-w-[400px]`}
                        onSubmit={handleSubmit(onSubmit)}>
                        <FormInput<IngredientFormFields>
                            label={'Изображение ингредиента'}
                            name={'files'}
                            type={'file'}
                            errors={errors}
                            register={register}
                            rules={createProductOptions.title}
                        />
                        <FormInput<IngredientFormFields>
                            label={'Название ингредиента'}
                            name={'title'}
                            errors={errors}
                            register={register}
                            rules={createProductOptions.title}
                        />
                        <FormInput<IngredientFormFields>
                            label={'Цена ингредиента'}
                            name={'price'}
                            type={"number"}
                            errors={errors}
                            register={register}
                            rules={createProductOptions.price}
                        />
                        <FormInput<IngredientFormFields>
                            name={'imageUrl'}
                            type={"hidden"}
                            register={register}
                        />
                        <Button>Добавить</Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default AdminPage;