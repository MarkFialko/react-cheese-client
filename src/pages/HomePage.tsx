import React, {useEffect, useState} from 'react';
import SearchList from "../components/Search/SearchList";
import ingredients from "../assets/ingredients.svg";
import bowl from "../assets/bowl.svg";
import ProductItem, {IProductItem} from "../components/Product/ProductItem";
import {useMediaQuery} from "react-responsive";
import Container from "../components/BuildComponents/Container";
import {bowlFilter, ingredientFilter} from "../utils/constants";
import IngredientService from "../service/IngredientService";
import Button from "../components/UI/Button";
import {Link} from "react-router-dom";

const HomePage = () => {
    const isTablet = useMediaQuery({query: "(max-width: 991px)"})

    const [isLoading, setIsLoading] = useState(true)

    const [productItems, setProductItems] = useState<Array<IProductItem>>([])

    useEffect(() => {
        const response = IngredientService.getAll()

        response.then((data) => {
            setProductItems(data.data.ingredients)
            setTimeout(() => {
                setIsLoading(false)

            }, 500)
        }).catch(() => console.log('errror'))

    }, [])

    return (
        <Container>
            <div className={` py-5 mdt:flex-row flex-col flex gap-[20px] items-start flex-grow`}>
                {!isTablet &&
                    <div
                        className={`flex mx-auto mdgridsmall:m-0 flex-col mdgridsmall:flex-row mdt:flex-col gap-[15px] items-start`}>
                        <SearchList isOpen={true} items={ingredientFilter} title={'Ингредиенты'} image={ingredients}/>
                        <SearchList isOpen={true} items={bowlFilter} title={'Оборудование'} image={bowl}/>
                    </div>
                }
                <div
                    className={` w-full mdms:m-0 mdd:grid-cols-4  mdms:grid-cols-2 mdgridsmall:grid-cols-3 mdgrid:grid-cols-4  mdt:grid-cols-3 grid gap-[16px]`}>
                    {isLoading ?
                        [...new Array(10)].map((i,index) => (
                            <Link key={index} to={'#'}
                                  className={`p-[14px] cursor-pointer duration-[300ms] hover:shadow-md overflow-hidden rounded-[5px] animate-pulse bg-orangeSelected flex flex-col w-full max-w-[480px]`}>
                                <div className={`w-full bg-orange animate-pulse rounded-[6px]  mx-auto h-[140px] mb-6`}/>
                                <div className={`flex flex-col w-full gap-[10px]`}>
                                    <p className={`h-[14px] w-full animate-pulse bg-orange rounded-[6px]`}></p>
                                    <p className={`h-[14px] w-full animate-pulse bg-orange rounded-[6px]`}></p>
                                </div>
                                <div
                                    className={`flex pt-[14px] justify-between items-center border-t border-t-lightGray`}>
                                    <div className={`flex flex-col items-start`}>
                                        <p className={`h-[14px] w-[100px] animate-pulse bg-orange rounded-[6px] text-[14px]`}></p>
                                    </div>
                                    <Button classes={`h-[38px] w-[92px] px-[10px]`}></Button>
                                </div>
                            </Link>
                        ))
                        :
                        productItems.map((productItem, i) => (
                            <ProductItem key={i} item={productItem}/>
                        ))
                    }

                </div>
            </div>
        </Container>

    );
};

export default HomePage;