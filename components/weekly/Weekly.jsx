import Image from "next/image.js";
import Icon1Src from "./images/icon.png";
import Icon2Src from "./images/icon2.png"
import { BidIcon } from "./icons/BidIcon.jsx";
import { WeeklySlider } from "./WeeklySlider"



export function Weekly() {
    return(
        <div className="bg-[#F1F1F1] relative">
            <div className="flex justify-center font-[600] text-[45px] text-[#C5C5C5] pt-[70px] pb-[100px]">
            Weekly - Top NFT
            </div>
                    <WeeklySlider />
                <div className="flex justify-end">
                    <div className="bg-white h-[246px] w-[365px] rounded-[16px] shadow-xl absolute mt-[-130px] mr-[99px]">
                    <div className="flex justify-center gap-[132px] items-center py-[26.37px] px-[24px]">
                        <div className="text-[21px] font-[600] w-[161px]">
                            Recent Viewed
                        </div>
                        <div className="text-[#CBD5E0] text-2xl">
                            ...
                         </div>
                    </div>
                    <div className="px-[27px]">
                    <div className="grid grid-rows-2 grid-cols-2 gap-x-[121.58px] gap-y-[26.39px]">
                        <div>
                            <div className=" flex items-center gap-3 text-start w-[129.22px]">
                                <Image src={Icon1Src} alt="avatar" width={48} height={48} unoptimized></Image>
                                <div>
                                    <div className="text-[15.36px] font-[500] leading-tight pb-[7.68px]">Alex Ca.</div>
                                    <div className="text-slate-400 text-xs leading-tight">Alexy</div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-2">
                                <BidIcon />
                                <div className="text-[15.36px] font-[600]">8,456</div>
                            </div>
                            <div className="text-[#10C352]">
                                +23,00%
                            </div>
                        </div>
                        <div>
                            <div className=" flex items-center gap-3 text-start w-[129.22px]">
                                <Image src={Icon2Src} alt="avatar" width={48} height={48} unoptimized></Image>
                                 <div>
                                    <div className="text-[15.36px] font-[500] leading-tight pb-[7.68px]">Juliya S.</div>
                                    <div className="text-slate-400 text-xs leading-tight">JuliyaS</div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="flex items-center  gap-2">
                                    <BidIcon />
                                    <div className="text-[15.36px] font-[600]">5,327</div>
                                </div>
                                <div className="text-[#E23333]">
                                -32,01%
                                </div>
                            </div> 
                     </div>
                    </div>
                    
                </div>
             </div>
         </div>
    );
}


