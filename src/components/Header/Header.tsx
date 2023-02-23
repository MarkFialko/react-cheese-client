import React from 'react';
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderMain from "./HeaderMain";


const Header = () => {

    return (
        <header
            className={`fixed w-full top-0 left-0 bg-main z-[11]`}
        >
            <HeaderTop/>
            <HeaderMain/>
            <HeaderBottom/>
        </header>
    );
};

export default Header;