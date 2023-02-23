import React from 'react';

const SocialItem = ({src}: { src: string }) => {
    return (
        <a target={"_blank"} href='#'>
            <img src={src} alt=""/>
        </a>
    );
};

export default SocialItem;