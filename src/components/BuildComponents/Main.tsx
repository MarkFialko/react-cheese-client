import React, {FC, ReactNode} from 'react';

type MainProps = {
    children: ReactNode
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <div className={`min-h-full mt-[162px] mt-[178px] flex-grow flex-auto w-full`}>
            {children}
        </div>
    );
};

export default Main;