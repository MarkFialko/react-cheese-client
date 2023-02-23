import React from 'react';
import Container from "../components/BuildComponents/Container";
import RegistrationLeft from "../components/Registration/RegistrationLeft";
import RegistrationRight from "../components/Registration/RegistrationRight";

const RegistrationPage = () => {
    return (
        <Container>
            <div className={`flex py-5 mdt:flex-row flex-col `}>
                <RegistrationLeft/>
                <RegistrationRight/>
            </div>
        </Container>
    );
};

export default RegistrationPage;