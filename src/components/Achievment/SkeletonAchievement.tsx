import React from 'react';

const SkeletonAchievement = () => {
    return (
        <div className={`flex animate-pulse flex-col mdd:flex-row items-center gap-[10px]`}
        >
            <div
                className={`flex rounded-[5px] bg-orangeSelected w-7 h-7 `}
            ></div>
            <div
                className={`mdd:flex flex mdm:hidden flex-col items-start gap-[10px]`}
            >
                <div
                    className={`h-2 bg-orangeSelected rounded-[5px] w-20`}
                ></div>
                <div
                    className={`h-2 bg-orangeSelected rounded-[5px] w-20`}
                ></div>
            </div>
        </div>
    );
};

export default SkeletonAchievement;