import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

export function SliderButtons({onPrev, onNext}) {
    return(
        <div className="flex justify-center pt-[74.42px] pb-[90.1px]">
        <div className="h-[68.99px] w-[166px] bg-[#FCFCFD] rounded-[17.25px] shadow-2xl p-[21.56px] flex justify-center">
            <button className="mr-[33.49px]" onClick={onPrev}>
                <ArrowLeftIcon className="fill-[#929292] hover:fill-[#23262F]"/>
            </button>
            <div className="h-[25.87px] w-[2.16px] bg-[#E6E8EC] rounded-[2.16px]"></div>
            <button className="ml-[33.49px]" onClick={onNext}>
                <ArrowRightIcon className="fill-[#929292] hover:fill-[#23262F]"/>
            </button>
        </div>
    </div>
    )
}