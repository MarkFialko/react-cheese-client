import React, {FC} from 'react';

type RegistrationInfoItemProps = {
    title: string,
    image: string,
    description: string
}

const RegistrationInfoItem: FC<RegistrationInfoItemProps> = ({title, image, description}) => {
    return (
        <div className={`flex flex-col gap-1 items-start`}>
            <img src={image} alt=""/>
            <h4 className={`text-[15px] font-bold`}>{title}</h4>
            <p className={`text-[14px] text-gray`}>{description}</p>
        </div>
    );
};

export default RegistrationInfoItem;