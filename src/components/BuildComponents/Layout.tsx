import React, {ReactNode} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Wrapper from "./Wrapper";
import Main from "./Main";

const Layout = ({children}: { children: ReactNode; }) => {

    return (
        <Wrapper>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </Wrapper>
    );
};

export default Layout;