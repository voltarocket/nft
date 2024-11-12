import Image from "next/image";
import Slide1Src from "./images/Slide-1.png";
import Slide2Src from "./images/Slide-2.png";
import Slide3Src from "./images/Slide-3.png";
import Slide4Src from "./images/Slide-4.png";
import Slide5Src from "./images/Slide-5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Slider1() {

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
        speed: 500
     };

    return(
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
                ))}</Slider>
                </div>
    );
}

