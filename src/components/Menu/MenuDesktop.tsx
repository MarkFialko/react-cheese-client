import React, {FC, useState} from 'react';
import {IMenuItem} from "./MenuMobile";
import {MdKeyboardArrowDown} from "react-icons/md";
import SubMenu from "./SubMenu";

type MenuDesktopProps = {
    menu: Array<IMenuItem>
}

const MenuDesktop: FC<MenuDesktopProps> = ({menu}) => {
    const [openedMenu, setOpenedMenu] = useState<Array<string>>(new Array(''))

    const toggleMenu = (menuName: string) => {
        openedMenu.includes(menuName)
            ? setOpenedMenu(openedMenu.filter(menuItem => menuItem !== menuName))
            : setOpenedMenu([...openedMenu, menuName])
    }

    return (
        <nav>
            <ul className={`flex z-10 items-center gap-3 text-[14px] text-dark`}>
                {menu.map(menuItem => (
                    <li className={` group relative`} key={menuItem.name}>
                        {menuItem.link && <a className={`group-hover:text-orange duration-500`}
                                             href={menuItem.link}>{menuItem.name}</a>}
                        {menuItem.children &&
                            <button onClick={() => toggleMenu(menuItem.name)}
                                    className={`flex items-center gap-[3px] group-hover:text-orange`}><p
                                className={`group-hover:text-orange  duration-500`}>{menuItem.name}</p>
                                <MdKeyboardArrowDown
                                    size={20}
                                    className={` ${openedMenu.includes(menuItem.name) ? 'rotate-180' : 'rotate-0'} transition-all group-hover:text-orange  duration-500 mt-[4px]`}/>
                            </button>
                        }
                        {menuItem.children &&
                            <SubMenu opened={openedMenu} styles="top-full shadow-md mt-2 left-[1px]"
                                     name={menuItem.name}
                                     subMenu={menuItem.children}/>
                        }
                    </li>
                ))}

            </ul>
        </nav>
    );
};

export default MenuDesktop;