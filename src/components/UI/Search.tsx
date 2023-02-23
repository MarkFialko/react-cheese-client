import React from 'react';
import {FiSearch} from "react-icons/fi";

const Search = ({placeholder}: { placeholder: string }) => {
    return (
        <div className={`flex cursor-pointer w-auto items-center gap-2`}>
            <FiSearch size={25} className={`opacity-60 text-darkGray`}/>
            <input
                className={`placeholder-darkGray placeholder-opacity-60 text-dark  bg-main text-[14px] w-[260px] outline-none border-none `}
                type="text"
                placeholder={placeholder}/>
        </div>
    );
};

export default Search;