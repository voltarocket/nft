import Image from "next/image"
import { BidIcon } from "../weekly/icons/BidIcon"

export function NftCard({img, name, currentBid}) {
    return (
         <div className="bg-white h-[402.28px] text-black rounded-xl p-3 shadow-xl">
        <div className="h-[252.9px] w-[252.9px]">
            <Image src={img} alt="" className="rounded-xl"/>
        </div>
        <div className="flex flex-col  p-[18.82px]">
            <div className="text-[21.68px] font-[600]">
                {name}
            </div>
            <div className="flex items-center mt-[14.2px]">
                <div className="w-[121.74px] flex flex-col justify-center">
                    <div className="font-[400] text-slate-500 mb-[4.16px]">Current Bid</div>
                    <div className="flex items-center gap-[3.46px] font-[500]">
                        <BidIcon />
                        {currentBid}
                    </div>
                </div>
                <button className="h-[51px] w-[121.74px] font-[600] bg-black text-white hover:bg-white hover:text-black border-2 border-black hover:border-black rounded-[11.76px]">PLACE BID</button>
            </div>
        </div>
        </div>    
    );
}