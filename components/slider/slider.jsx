import Image from "next/image";
import Slide1Src from "./images/Slide-1.png";
import Slide2Src from "./images/Slide-2.png";
import Slide3Src from "./images/Slide-3.png";
import Slide4Src from "./images/Slide-4.png";
import Slide5Src from "./images/Slide-5.png";

export function Slider() {

const Img = () => {
    return(
        <Image src={Slide1Src} alt=""/>
    )
}

const data = [
{
    name: ' Sun-Glass',
    img: './images/Slide-1.png',
}
]

    return(
        <div className="w3/4 m-auto">
            <div className="mt-20">
                {data.map((d) => (
                    <div>
                        <div>
                            <img src={d.img} alt=""/>
                        </div>
                        <div>
                            <p>
                                {d.name}
                                <button>PLACE BID</button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

