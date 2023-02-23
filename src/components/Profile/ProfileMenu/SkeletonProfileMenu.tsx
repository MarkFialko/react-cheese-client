import React from 'react';

const SkeletonProfileMenu = () => {
    return (
        <div className={`flex  items-center gap-[5px]`}>
            <div
                className={`h-7 w-7 mdt:h-[21px] mdt:w-[21px] flex rounded-full bg-orangeSelected animate-pulse`}
            ></div>
            <div
                className={`w-[110px] hidden mdms:flex  mdt:w-[100px] h-3 rounded-[5px] bg-orangeSelected animate-pulse`}
            ></div>
        </div>
    );
};

export default SkeletonProfileMenu;