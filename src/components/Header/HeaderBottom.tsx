import React from 'react';
import {useMediaQuery} from "react-responsive";
import Container from "../BuildComponents/Container";
import MenuDesktop from "../Menu/MenuDesktop";
import HorizontalBorder from "../UI/HorizontalBorder";
import Search from "../UI/Search";
import {bottomNavItems} from "../../utils/constants";

const HeaderBottom = () => {
    const isTablet = useMediaQuery({query: "(max-width: 992px)"})
    const isBorderVisible = useMediaQuery({query: "(max-width: 1020px)"})

    return (
        <div className={`w-full flex items-center h-[54px] border-b border-b-lightGray`}>
            <Container>
                <div className={`flex items-center justify-between`}>
                    {!isTablet && <MenuDesktop menu={bottomNavItems}/>}

                    <div className={`flex items-center`}>
                        {!isBorderVisible && <HorizontalBorder/>}
                        <Search placeholder={`Введите название товара или артикул`}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderBottom;