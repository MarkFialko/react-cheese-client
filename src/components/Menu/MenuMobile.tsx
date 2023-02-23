import React, {useEffect, useState} from 'react';

import styles from "./MenuMobile.module.css";
import MenuIcon from "./MenuIcon";
import {MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"
import Clock from "../Clock/Clock";
import Social from "../Social/Social";
import AchievementList from "../Achievment/AchievementList";
import {useMediaQuery} from "react-responsive";
import SearchList from "../Search/SearchList";
import ingredients from "../../assets/ingredients.svg";
import bowl from "../../assets/bowl.svg";
import BodyOverflowChanger from "../../utils/BodyOverflowChanger";
import {bowlFilter, ingredientFilter} from "../../utils/constants";

export interface IMenuItem {
    name: string,
    link?: string,
    children?: Array<IMenuItem>
}

const MenuMobile = ({menu}: { menu: Array<IMenuItem> }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [level, setLevel] = useState<number>(1)
    const [currentMenu, setCurrentMenu] = useState<Array<Array<IMenuItem>>>([menu])


    useEffect(() => {
        BodyOverflowChanger(isOpen)
    }, [isOpen])

    const isMobile = useMediaQuery({query: "(max-width: 767px)"})

    const selectLevel = (level: number, menu?: Array<IMenuItem>) => {
        if (!menu) return
        setLevel(level)
        setCurrentMenu((l) => {
            l[level] = menu
            return l
        })
    }

    const backLevel = () => {
        setLevel(level - 1)
        setCurrentMenu((l) => {
            l[level] = []
            return l
        })
    }

    return (
        <>
            <MenuIcon isOpen={isOpen} setIsOpen={() => setIsOpen(true)}/>
            <nav className={styles.menu} role={'navigation'}>
                <div onClick={() => setIsOpen(false)}
                     className={`${styles.cover} ${isOpen ? 'visible' : 'invisible'}`}/>
                <div className={`${styles.mobileMenuBox} ${isOpen ? 'visible left-0' : 'invisible left-[-100%]'}`}>
                    <div className={styles.menuHeader}>
                        {level > 1 && <button onClick={() => backLevel()} className={`${styles.backButton}`}>
                            <MdKeyboardArrowLeft size={30} className="dark"/>
                        </button>}
                        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
                            <MdClose size={30} color="dark"/>
                        </button>
                    </div>
                    <div className={styles.level} style={{
                        transform: ` translateX(calc(-100% * ${level - 1}))`
                    }}>
                        {currentMenu.map((item, i) => (
                            <div key={i}>
                                {item.map((m) => (
                                    <div key={m.name}>
                                        {m.children && <button onClick={() => selectLevel(level + 1, m.children)}
                                                               className={styles.item}>{m.name}
                                            <MdKeyboardArrowRight size={30} className='dark'/>
                                        </button>}
                                        {m.link && <a href={m.link} className={styles.item}>{m.name}</a>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={`my-[16px] w-full flex flex-col gap-[16px]`}>
                        <SearchList isOpen={false} items={ingredientFilter} title={'Ингредиенты'} image={ingredients}/>
                        <SearchList isOpen={false} items={bowlFilter} title={'Оборудование'} image={bowl}/>
                    </div>
                    <div
                        className={`flex flex-col items-center w-[320px] mx-auto border-t border-t-orangeYellow pt-[16px]`}>
                        <Clock/>
                        <Social/>
                        {isMobile && <AchievementList/>}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MenuMobile;