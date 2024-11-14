import { useState } from "react"
import { Data } from "../nftcards/NftData"
import { NftCard } from "../nftcards/NftCard"
import { TabButtons } from "./TabButtons";

export function Marketplace() {
    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];
  
    const filterItem = (curcat) => {
      const newItem = Data.filter((newVal) => {
        return newVal.category === curcat;
      });
      setItem(newItem);
    };
    return(
        <div className="pt-[236.41px]">
            <div className=" text-[45px] font-[600] text-center">Explore Marketplace</div>
                <div>
                    <TabButtons 
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}/>
                    <div className="flex flex-row justify-center gap-3"> 
                    <NftCard item={item} /> 
                </div>
            </div>
        </div>
    )
}