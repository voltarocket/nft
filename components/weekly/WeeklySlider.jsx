import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { NftCard } from '../nftcards/NftCard';
import { SliderButtons } from "./SliderButtons";
import { Data } from "../nftcards/NftData"

export function WeeklySlider() {

  const swiperRef = useRef(null);

    return(
        <>
         <Swiper
         onSwiper={(swiper) => {swiperRef.current = swiper}} 
         spaceBetween={50}
         loop={true}
         slidesPerView={4}
         modules={[Navigation]}
      >
        {Data.map((slide) => (
          <SwiperSlide>
            <NftCard  img={slide.img} name={slide.name} currentBid={slide.currentBid} time={slide.time}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons onPrev={() => swiperRef.current?.slidePrev()} onNext={() =>swiperRef.current?.slideNext()}/>
      </>
       
    )
}
