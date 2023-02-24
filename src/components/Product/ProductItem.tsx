import React from 'react';
import Button from "../UI/Button";
import {Link} from "react-router-dom";
import {IIngredient} from "../../models/Ingredient";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {create} from "../../store/actions/basketAction";
import {toastAnswerCreator} from "../../utils/toastAnswerCreator";
import {useAppSelector} from "../../hooks/useAppSelector";
import {toast} from "react-toastify";


const ProductItem = ({item}: { item: IIngredient }) => {

    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector(state => state.basket)
    const {user,isAuth} = useAppSelector(state => state.auth)

    const productHandler = (id: string) => {
        if (!isLoading && isAuth ) {
            const response = dispatch(create(id))
            toastAnswerCreator(response, `${user.fullName.split(" ")[0]}`)
        }
        if (!isAuth) {
            toast('Для добавления товаров в корзину нужно зарегестрироавться!',{
                type:'warning'
            })
        }
    }

    return (
        <Link to={'#'}
              className={`p-[14px] cursor-pointer duration-[300ms] hover:shadow-md overflow-hidden rounded-[5px] bg-white border border-lightGray flex flex-col w-full max-w-[480px]`}>
            <img className={`w-[180px] mx-auto h-[140px] mb-6`} src={item.imageUrl} alt=""/>
            <p className={`text-dark pb-[14px] flex flex-grow text-[16px]`}>{item.title}</p>
            <div className={`flex pt-[14px] justify-between items-center border-t border-t-lightGray`}>
                <div className={`flex flex-col items-start`}>
                    <p className={`text-[14px]`}><span className={`text-[16px]`}>{item.price}₽</span>/1 шт.</p>
                </div>
                <Button
                    onClick={() => productHandler(item._id as string)}
                    classes={`h-[38px] px-[10px]`}>Добавить</Button>
            </div>
        </Link>
    );
};

export default ProductItem;