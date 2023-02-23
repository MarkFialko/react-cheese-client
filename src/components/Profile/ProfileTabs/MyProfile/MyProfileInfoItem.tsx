import React, {FC} from 'react';

type MyProfileInfoItemProps = {
    title: string,
    value: string
}

const MyProfileInfoItem: FC<MyProfileInfoItemProps> = ({title, value}) => {
    return (
        <div className={`flex flex-wrap items-start`}>
            <p
                className={`w-[200px] text-blackLight`}
            >{title}:</p>
            <p
                className={`w-[250px]`}
            >{value}</p>
        </div>
    );
};

export default MyProfileInfoItem;