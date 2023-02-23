import React from 'react';

const AchievementTippy = ({tippyText}: { tippyText: string }) => {
    return (
        <div
            className={`absolute z-10 hidden group-hover:visible group-hover:opacity-100 opacity-0 invisible duration-500 text-[13px] bg-dark items-center justify-center rounded-[4px] w-screen w-max max-w-[240px] mt-2 mdm:inline-flex top-full left-1/2 translate-x-[-50%]`}>
            <p className={`text-white text-center px-3 py-2`}>{tippyText}</p>
        </div>
    );
};

export default AchievementTippy;