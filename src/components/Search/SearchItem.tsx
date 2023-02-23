import React, {FC} from 'react';
import SearchList, {ISearchItem} from "./SearchList";


type SearchItemProps = {
    item: ISearchItem
}

const SearchItem: FC<SearchItemProps> = ({item}) => {

    return (
        <div
            className={` flex flex-col w-full group first:border-b first:border-borderGray last:border-b-0 border-b border-borderGray`}>
            {!item.children &&
                <li className={` hover:bg-orangeSelected  hover:text-orange duration-200  flex w-full  cursor-pointer  text-dark text-[20px] mdt:text-[16px] items-center justify-between py-[12px] px-[16px] bg-white`}>
                    <a className={` w-full flex items-center h-full`} href="#">{item.name}</a>
                </li>
            }
            {item.children && <SearchList isOpen={false} items={item.children} title={item.name}/>}
        </div>
    );
};

export default SearchItem;