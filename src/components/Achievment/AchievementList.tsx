import React from 'react';
import {achievements} from "../../utils/constants";
import Achievement from "./Achievement";


const AchievementList = () => {

    return (

        <div className={`flex flex-row items-start mdm:items-center gap-[18px]`}>

            {achievements.map((achievement, i) =>
                <Achievement key={achievement.image} image={achievement.image}
                             textBottom={achievement.textBottom}
                             tippyText={achievement.tippyText}
                             textTop={achievement.textTop}
                />
            )}
        </div>
    );
};

export default AchievementList;