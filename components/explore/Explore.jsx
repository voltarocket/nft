import clsx from "clsx";
import Image from "next/image";
import ImageSrc from "./Rectangle.png"

export function Explore({className}) {
   return (
    <div className={clsx("px-[97px] flex justify-center", className)}>
        <div className="bg-black h-[311px] w-[1245px] rounded-[30px] p-[31px] flex justify-center gap-[303px]">
            <div>
                <div className="text-[45px] text-white font-[600]">
                Create and Sell NFTs
                </div>
                <div className="text-[20.27px] text-[#D4D4D4] font-[500] mt-[12.48px]">
                World’s Largest NFT Place
                </div>
                <div className="flex mt-[50.83px] gap-[30.51px] pb-[82px]">
            <button className="bg-white text-black hover:bg-slate-50 border-2 border-black hover:border-black transition-colors font-[600] text-[21.36px] px-[25-53px] h-[60px] w-[186.06px] rounded-[16.17px]">
                Explore More
            </button>
            <button className="bg-black text-white hover:bg-white border-2 border-white hover:text-black transition-colors font-[600] text-[21.36px] px-[25-53px] h-[60px] w-[183.06px] rounded-[16.17px]">
                Sell Artwork
            </button>
        </div>
            </div>
            <Image src={ImageSrc} alt="" className="h-[249px] w-[369px]"/>
        </div>
    </div>
    )
}