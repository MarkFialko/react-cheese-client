import React from 'react';
import {useMediaQuery} from "react-responsive";
import Container from "../BuildComponents/Container";
import MenuMobile from "../Menu/MenuMobile";
import MenuDesktop from "../Menu/MenuDesktop";
import {bottomNavItems, topNavItems} from "../../utils/constants";
import ProfileMenu from "../Profile/ProfileMenu/ProfileMenu";
import Clock from "../Clock/Clock";
import Location from "../Location/Location";

const HeaderTop = () => {

    const isTablet = useMediaQuery({query: "(max-width: 992px)"})

    return (
        <div className={`w-full flex items-center h-11 border-b border-b-lightGray`}>
            <Container>
                <div className={`flex items-center justify-between`}>
                    <div className={`flex items-center gap-3`}>
                        <Location cities={["Москва", "Санкт-Петербург", "Екатеринбург",]}/>
                        {!isTablet && <Clock/>}
                    </div>
                    <div className={`flex items-center gap-3 text-[14px] text-dark `}>
                        {
                            isTablet
                                ? <MenuMobile menu={[...topNavItems, ...bottomNavItems]}/>
                                : <MenuDesktop menu={topNavItems}/>
                        }
                        <ProfileMenu/>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default HeaderTop;