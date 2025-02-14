import { useState } from "react"
import { Data } from "../nftcards/NftData"
import { TabItem } from "./TabItem";
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
                    <div className="flex flex-row flex-wrap px-[96px] gap-x-[39.97px] gap-y-[67.62px]"> 
                    <TabItem item={item} /> 
                </div>
            </div>
        </div>
    )
}