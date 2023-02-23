import React, {FC, ReactNode} from 'react';

type WrapperProps = {
    children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {
    return (
        <div className={`flex w-[100%] min-h-screen flex-col`}>
            {children}
        </div>
    );
};

export default Wrapper;