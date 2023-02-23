import React from 'react';
import Container from "../components/BuildComponents/Container";
import LoginLeft from "../components/Login/LoginLeft";
import LoginRight from "../components/Login/LoginRight";

const LoginPage = () => {
    return (
        <Container>
            <div className={`flex py-5 mdt:flex-row flex-col`}>
                <LoginLeft/>
                <LoginRight/>
            </div>
        </Container>
    );
};

export default LoginPage;