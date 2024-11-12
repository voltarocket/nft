import Image from "next/image"
import Image1Src from "./images/Rectangle 3.png"
export function Discover() {
    return(
        <div className="flex  justify-center pt-[99px] gap-[48px]">
            <div className="flex-col pl-[97px] w-[568px]">
        <div className="h-px w-[195px] bg-[#201F1F]"/>
        <div className="text-[75px] text-black leading-[90px] mb-4">Discover And Create NFTs</div>
        <div className="text-[18px] text-[#676767] leading-[28px]mb">Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <b>$20 bonus</b>.</div>
        <div className="flex mt-[45px] gap-3">
            <button className="bg-black text-white hover:bg-white hover:text-black border-2 hover:border-black transition-colors  h-[60px] w-[179px] rounded-[16.17px]">
                EXPLORE MORE
            </button>
            <button className="bg-white text-black hover:bg-slate-50 border-2 border-black transition-colors h-[60px] w-[138px] rounded-[16.17px]">
                CREATE NFT
            </button>
        </div>
            </div>
            <div className=" grid grid-cols-4 grid-rows-3 w-[768px]">
                <div className="row-span-2 col-span-2"><Image src={Image1Src} alt="image1" className="h-[394.59px] w-[391px]"/></div>
            </div>
        </div>
    )
}