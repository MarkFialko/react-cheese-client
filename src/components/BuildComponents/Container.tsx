import React, {FC, ReactNode} from 'react';


type ContainerProps = {
    children: ReactNode,
    classes?: string
}

const Container: FC<ContainerProps> = ({children, classes}) => {
    return (
        <div className={`${classes ? classes : ''}  px-[15px] mx-auto w-full max-w-screen-mdpc`}>
            {children}
        </div>
    );
};

export default Container;