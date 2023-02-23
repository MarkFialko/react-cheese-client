import React from 'react';
import Container from "../BuildComponents/Container";

const Footer = () => {
    return (
        <div className={`w-full bg-white `}>
            <Container>
                <div className={`flex py-[50px] justify-between items-start`}>
                    FOOTER
                </div>
            </Container>
        </div>
    );
};

export default Footer;