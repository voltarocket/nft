import Image from "next/image"
import Image1Src from "./images/Rectangle 3.png"
import Image2Src from "./images/Rectangle 4.png" 
import { ArrowLeftIcon } from "../slider/icons/ArrowLeftIcon"
import { ArrowRightIcon } from "../slider/icons/ArrowRightIcon"


export function Discover() {
    return(
        <div className="flex justify-center pt-[99px] pb-[143.01px] gap-[48px]">
            <div className="flex-col pl-[97px] w-[568px]">
        <div className="h-px w-[195px] bg-[#201F1F]"/>
        <div className="text-[75px] font-[600] text-black leading-[90px] mb-4">Discover And Create NFTs</div>
        <div className="text-[18px] text-[#676767] leading-[28px]mb">Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <b>$20 bonus</b>.</div>
        <div className="flex mt-[45px] gap-3 pb-[82px]">
            <button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black hover:border-black transition-colors font-[600]  h-[60px] w-[179px] rounded-[16.17px]">
                EXPLORE MORE
            </button>
            <button className="bg-white text-black hover:bg-slate-50 border-2 border-black transition-colors font-[600] h-[60px] w-[138px] rounded-[16.17px]">
                CREATE NFT
            </button>
        </div>
        <div className="flex gap-[64.69px]">
            <div className="flex flex-col justify-center">
                <div className="text-[36.77px] font-[600]">430K+</div>
                <div className="text-[12.26px] font-[500] text-[#848586]">Art Works</div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="text-[36.77px] font-[600]">159K+</div>
                <div className="text-[12.26px] font-[500] text-[#848586]">Creators</div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="text-[36.77px] font-[600]">87K+</div>
                <div className="text-[12.26px] font-[500] text-[#848586]">Collections</div>
            </div>
        </div>
            </div>
            <div className=" grid grid-cols-2 grid-rows-2 w-[768px]">
                <div className="row-span-2 col-span-2"><Image src={Image1Src} alt="image1" className="h-[394.59px] w-[391px]"/></div>
                <div className="flex justify-center pt-[27.96px]">
                    <div className="h-[68.99px] w-[166px] bg-[#FCFCFD] rounded-[17.25px] shadow-2xl p-[21.56px] flex justify-center">
                        <button className="mr-[33.49px]">
                            <ArrowLeftIcon className="fill-[#929292] hover:fill-[#23262F]"/>
                        </button>
                        <div className="h-[25.87px] w-[2.16px] bg-[#E6E8EC] rounded-[2.16px]"></div>
                            <button className="ml-[33.49px]">
                                <ArrowRightIcon className="fill-[#929292] hover:fill-[#23262F]"/>
                            </button>
                        </div>
                    </div>
                <div className="row-span-2 col-span-1">
                <Image src={Image2Src} alt="" className="h-[322.08px] w-[319.16px]"/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}