import { SearchIcon } from "./SearchIcon";
import { useState } from "react";
import clsx from "clsx";

export function Search(){
    const [isFocused, setIsFocused] = useState(false); 
  
    const handleOnFocus = () => { 
        setIsFocused(true); 
    }; 
  
    const handleBlur = () => { 
        setIsFocused(false); 
    }; 

    return(
        <div className="pl-[117.49px] relative">
            <button type="sumbit" className="absolute my-[18px] mx-[22.58px]">
                <SearchIcon className={clsx(isFocused ? "stroke-black" : "stroke-[#9D9D9D]")} />
            </button>
            <input 
                type="text" 
                className="bg-[#EDEDED] border rounded-[14.88px] pl-[69.81px] p-3 h-[57px] w-[348.45px]  focus:placeholder-black" 
                onFocus={handleOnFocus} 
                onBlur={handleBlur}    
                placeholder="Search Art Work Creator"
            />
          </div>
    )
}