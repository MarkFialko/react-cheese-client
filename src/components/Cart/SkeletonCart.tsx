import React from 'react';

const SkeletonCart = () => {
    return (
        <div
            className={`flex items-center gap-[15px]`}
        >
            <div className={`mdms:flex hidden flex-col items-end gap-[10px]`}>
                <p
                    className={`h-2 w-[90px] rounded-[5px] bg-orangeSelected animate-pulse`}
                />
                <p
                    className={`h-2 w-[60px] rounded-[5px] bg-orangeSelected animate-pulse`}
                />
            </div>
            <div
                className={`flex rounded-[5px] bg-orangeSelected animate-pulse w-10 h-10 mdms:w-11 mdms:h-11`}
            />
        </div>
    );
};

export default SkeletonCart;