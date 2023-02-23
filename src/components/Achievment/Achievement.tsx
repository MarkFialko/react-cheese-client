import React, {FC} from 'react';
import AchievementTippy from "../UI/Tippy/AchievementTippy";

export interface IAchievement {
    image: string,
    textTop: string
    textBottom: string,
    tippyText: string
}

const Achievement: FC<IAchievement> = ({image, textTop, textBottom, tippyText}) => {

    return (
        <div className={`relative group inline-flex flex-col mdt:flex-row cursor-pointer items-center gap-[10px]`}>
            <img
                src={image} alt={image}/>
            <div className={`text-[13px] mdm:hidden text-center mdt:text-start mdd:flex text-darkGray flex-col`}>
                <p>{textTop}</p>
                <p>{textBottom}</p>
            </div>
            <AchievementTippy tippyText={tippyText}/>
        </div>
    );
};

export default Achievement;