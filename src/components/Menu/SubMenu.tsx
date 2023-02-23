import {IMenuItem} from "./MenuMobile";
import React, {FC, useState} from "react";
import {MdKeyboardArrowRight} from "react-icons/md";

type SubMenuProps = {
    subMenu?: Array<IMenuItem>,
    opened: Array<String>,
    name: string,
    styles?: string
}

const SubMenu: FC<SubMenuProps> = ({subMenu, opened, name, styles}) => {

    const [openedMenu, setOpenedMenu] = useState<Array<string>>(new Array(''))

    const toggleMenu = (menuName: string) => {
        openedMenu.includes(menuName)
            ? setOpenedMenu(openedMenu.filter(menuItem => menuItem !== menuName))
            : setOpenedMenu([...openedMenu, menuName])
    }

    if (!subMenu) return null
    return (
        <ul className={` z-10 ${opened.includes(name) ? 'visible opacity-100' : 'invisible opacity-0'} w-auto duration-500 border-y border-y-main bg-white rounded-[5px] flex absolute ${styles ? styles : 'ml-1 left-full top-[-1px]'}  flex-nowrap flex-col items-start`}>
            {subMenu.map(item => (
                <li
                    className={`cursor-pointer w-full h-full flex relative flex-nowrap whitespace-nowrap`}
                    key={item.name}>
                    <a onClick={() => toggleMenu(item.name)}
                       className={`hover:bg-orangeLight ${openedMenu.includes(item.name) ? 'bg-orangeLight text-orange' : ''} hover:text-orange justify-between items-center  flex w-full p-2`}
                       href={item.link}>{item.name}
                        {item.children && <MdKeyboardArrowRight
                            className={` ${openedMenu.includes(item.name) ? 'rotate-180' : 'rotate-0'} transition-transform duration-500 mt-[1px]`}
                            size={20}/>}
                    </a>
                    <SubMenu opened={openedMenu} name={item.name} subMenu={item.children}/>
                </li>
            ))}

        </ul>
    )
}

export default SubMenu;