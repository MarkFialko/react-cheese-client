import React, {FC} from 'react';

type MenuIconProps = {
    isOpen: boolean,
    setIsOpen: () => void
}

const MenuIcon: FC<MenuIconProps> = ({setIsOpen, isOpen}) => {
    return (
        <button
            className={` ${isOpen ? "rotate-90" : "rotate-0"} order-3 transition-transform duration-200 relative w-7 h-7`}
            onClick={setIsOpen}>
            <span className={`absolute top-0 left-0 w-2 h-2 rounded-full border-[2px] border-orange`}></span>
            <span
                className={`absolute top-1/2 translate-y-[-50%] left-0 w-2 h-2 rounded-full border-[2px] border-orange`}></span>
            <span className={`absolute bottom-0 left-0 w-2 h-2 rounded-full border-[2px] border-orange`}></span>
            <span
                className={`absolute left-1/2 translate-x-[-50%] top-0 w-2 h-2 rounded-full border-[2px] border-orange`}></span>
            <span
                className={`absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]  w-2 h-2 rounded-full border-[2px] border-orange`}></span>
            <span
                className={`absolute left-1/2 translate-x-[-50%] bottom-0  w-2 h-2 rounded-full border-[2px] border-orange`}></span>
            <span className={`absolute w-2 right-0 top-0 h-2 rounded-full border-[2px] border-orange`}></span>
            <span
                className={`absolute w-2 right-0 top-1/2 translate-y-[-50%] h-2 rounded-full border-[2px] border-orange`}></span>
            <span className={`absolute w-2 right-0 bottom-0 h-2 rounded-full border-[2px] border-orange`}></span>
        </button>
    );
};

export default MenuIcon;