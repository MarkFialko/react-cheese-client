import React from 'react';

const SkeletonLocation = () => {
    return (
        <div
            className={`flex items-center gap-2 h-[25px]`}
        >
            <div className={`h-[21px] w-[21px] animate-pulse rounded-full bg-orangeSelected`}/>
            <div
                className={`rounded-[5px] animate-pulse bg-orangeSelected h-3 w-[120px]  mdt:w-[180px]`}
            ></div>
        </div>
    );
};

export default SkeletonLocation;