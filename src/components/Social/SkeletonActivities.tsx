import React from 'react';

const SkeletonActivities = () => {
    return (
        <div className={`flex justify-between h-[62px] flex-col gap-1 items-end`}>
            <div className={`h-3 mt-[6px] w-[120px] bg-orangeSelected rounded-[5px] animate-pulse`}/>
            <div className={`h-[34px] w-[160px] bg-orangeSelected rounded-[5px] animate-pulse`}>
            </div>
        </div>
    );
};

export default SkeletonActivities;