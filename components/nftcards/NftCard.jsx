import Image from "next/image"
import { useState, useEffect } from "react";
import { BidIcon } from "../weekly/icons/BidIcon"

export function NftCard({img, name, currentBid, time}) {
    const initialTimeInSeconds = 7 * 3600 + 9 * 60 + 12;
    const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
         <div className="bg-white h-[402.28px] w-[281.13px] text-black rounded-[23.48px] p-[14.2px] shadow-xl">
        <div className="h-[252.9px] w-[252.9px]">
            <Image src={img} alt="" className="rounded-[23.48px] relative"/>
            <div className="absolute -mt-[238.7px] ml-[127.03px] h-[37.64px] w-[116.58px] bg-[#1C1D2059] rounded-[9.41px] px-[14.29px] py-[8.32px] text-[14.12px] text-white text-center">
                {timeLeft > 0 ? formatTime(timeLeft) : "SOLD"}
            </div>
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

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}