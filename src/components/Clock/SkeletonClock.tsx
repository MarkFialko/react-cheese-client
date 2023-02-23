import React from 'react';

const SkeletonClock = () => {
    return (
        <div className={`flex  items-center gap-2`}>
            <div className={`h-[21px] w-[21px] animate-pulse rounded-full bg-orangeSelected`}/>
            <p
                className={`h-3 rounded-[5px] bg-orangeSelected animate-pulse w-[110px]`}
            ></p>
        </div>
    );
};

export default SkeletonClock;