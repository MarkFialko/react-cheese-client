import React, {FC, useState} from 'react';
import SearchItem from "./SearchItem";
import {MdKeyboardArrowRight} from "react-icons/md";


export interface ISearchItem {
    name: string,
    link: string,
    children?: Array<ISearchItem>
}

type SearchListProps = {
    title?: string,
    image?: string,
    isOpen: boolean,
    items: Array<ISearchItem>
}

const SearchList: FC<SearchListProps> = ({title, image, items, isOpen}) => {

    const [isListOpen, setIsListOpen] = useState<boolean>(isOpen)

    return (
        <div
            className={` overflow-hidden transition-all duration-500 text-dark text-[20px] mdt:text-[16px]`}>
            {title && image &&
                <h3 onClick={() => setIsListOpen(!isListOpen)}
                    className={` bg-orangeSelected px-[16px] py-[12px] cursor-pointer flex items-center w-[320px] mdt:w-[290px] gap-[10px]`}>
                    {image && <img src={image} alt=""/>}
                    <p>{title}</p>
                    {!image && <MdKeyboardArrowRight/>}
                </h3>
            }
            {title && !image &&
                <div
                    className={`flex  ${isListOpen? "bg-orangeSelected text-orange" : 'bg-white'} hover:bg-orangeSelected hover:duration-200 hover:text-orange  items-center justify-between`}>
                    <a href="#" className={`flex w-full pl-[16px] py-[10px] items-center justify-between`}>
                        {title}
                    </a>
                    <div onClick={() => setIsListOpen(!isListOpen)}
                         className={`cursor-pointer mr-[16px] flex-shrink-0 w-8 h-8 bg-orangeYellow flex items-center justify-center rounded-full`}>
                        <MdKeyboardArrowRight
                            className={`${isListOpen ? "rotate-180" : ""} text-darkGray hover:text-dark duration-200`}/>
                    </div>
                </div>
            }
            {items &&
                <ul className={`${isListOpen ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden transition-all duration-500 flex flex-col w-[320px] mdt:w-[290px] items-start`}>
                    {items.map(ingredientItem => (
                        <SearchItem key={ingredientItem.name} item={ingredientItem}/>
                    ))}
                </ul>
            }
        </div>
    );
};

export default SearchList;