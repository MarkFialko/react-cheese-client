import React from 'react';
import Container from "../BuildComponents/Container";
import logo from "../../assets/logo.svg";
import AchievementList from "../Achievment/AchievementList";
import HorizontalBorder from "../UI/HorizontalBorder";
import Social from "../Social/Social";
import {useMediaQuery} from "react-responsive";
import {Link} from "react-router-dom";
import Cart from "../Cart/Cart";


const HeaderMain = () => {

    const isTablet = useMediaQuery({query: "(max-width: 991px)"})
    const isMobile = useMediaQuery({query: "(max-width: 767px)"})

    return (
        <div className={`w-full flex items-center h-16 mdt:h-20 border-b border-b-lightGray`}>
            <Container>
                <div className={`flex items-center justify-between`}>
                    <Link to='/'>
                        <img
                            className={`w-[220px] w-full m-0 mdt:mr-5`} src={logo} alt=""/>
                    </Link>
                    {!isMobile && <AchievementList/>}
                    {!isMobile && <HorizontalBorder/>}
                    {!isTablet && <Social/>}
                    {!isTablet && <HorizontalBorder/>}
                    <Cart/>
                </div>
            </Container>
        </div>
    )
}

export default HeaderMain;