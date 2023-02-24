import React, {FC} from 'react';
import SearchList, {ISearchItem} from "./SearchList";
import {NavLink} from "react-router-dom";


type SearchItemProps = {
    item: ISearchItem
}

const SearchItem: FC<SearchItemProps> = ({item}) => {

    return (
        <div
            className={` flex flex-col w-full group first:border-b first:border-borderGray last:border-b-0 border-b border-borderGray`}>
            {!item.children &&
                <li className={` hover:bg-orangeSelected  hover:text-orange duration-200  flex w-full  cursor-pointer  text-dark text-[20px] mdt:text-[16px] items-center justify-between py-[12px] px-[16px] bg-white`}>
                    <NavLink className={` w-full flex items-center h-full`} to={item.link}>{item.name}</NavLink>
                </li>
            }
            {item.children && <SearchList isOpen={false} items={item.children} title={item.name}/>}
        </div>
    );
};

export default SearchItem;