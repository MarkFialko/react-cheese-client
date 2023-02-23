import React from 'react';

const SkeletonMenuItem = () => {
    return (
        <div
            className={`h-3 w-[80px] bg-orangeSelected animate-pulse rounded-[5px]`}
        ></div>
    );
};

export default SkeletonMenuItem;