import Image from "next/image";
import Slide1Src from "./images/Slide-1.png";
import Slide2Src from "./images/Slide-2.png";
import Slide3Src from "./images/Slide-3.png";
import Slide4Src from "./images/Slide-4.png";
import Slide5Src from "./images/Slide-5.png";
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import { NextArrow, PrevArrow } from "react-slick/lib/arrows";

export function ReactSlider() {

const data = [
    {
        name: ' Sun-Glass',
        img: Slide3Src,
    },
    {
        name: ' Sun-Glass',
        img: Slide4Src,
    },
    {
        name: ' Sun-Glass',
        img: Slide3Src,
    },
    {
        name: ' Sun-Glass',
        img: Slide4Src,
    },
    {
        name: ' Sun-Glass',
        img: Slide5Src,
    }
]

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    }

    return(
        <div className="bg-[#F1F1F1]">
            <div className="flex justify-center font-[600] text-[45px] text-[#C5C5C5] pt-[70px] pb-[100px]">
            Weekly - Top NFT
            </div>
            <div className="slider-container">
                    <Slider {...settings}>
                    {data.map((d) => (
                    <div className="bg-white h-[402.28px] text-black rounded-xl p-3 shadow-xl">
                        <div className="h-[252.9px] w-[252.9px]">
                            <Image src={d.img} alt="" className="rounded-xl"/>
                        </div>
                        <div className="flex flex-col  p-[18.82px]">
                            <div className="text-[21.68px] font-[600]">
                                {d.name}
                            </div>
                            <div className="flex items-center gap-14 mt-[14.2px]">
                                <div className="font-[400] text-slate-500">Current Bid</div>
                                <button className="h-[51px] w-[121px] bg-slate-950 text-white rounded-[11.76px]">PLACE BID</button>
                            </div>
                           
                        </div>
                    </div>
                ))}
                </Slider>
                </div>
                <div className="flex justify-center pt-[114.42px]">
                    <div className="h-[68.99px] w-[166px] bg-[#FCFCFD] rounded-[17.25px] shadow-2xl p-[21.56px] flex justify-center gap-[34.49px]">
                        <CustomPrevArrow >
                            <ArrowLeftIcon className="fill-[#929292] hover:fill-[#23262F]"/>
                        </CustomPrevArrow>
                        <div className="h-[25.87px] w-[2.16px] bg-[#E6E8EC] rounded-[2.16px]"></div>
                        <CustomNextArrow>
                            <ArrowRightIcon className="fill-[#929292] hover:fill-[#23262F]"/>
                        </CustomNextArrow>
                    </div>
                </div>
        </div>
    );
}

function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} />
    );
  }
  
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
      />
    );
  }

