import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import { NftCard } from '../nftcards/NftCard';
import { SliderButtons } from "./SliderButtons";
import { Data } from "../nftcards/NftData"

export function WeeklySlider() {

        const swiperRef = useRef(null);

    return(
        <>
         <Swiper
         onSwiper={(swiper) => (swiperRef.current = swiper)} 
         spaceBetween={50}
         slidesPerView={1}
         modules={[Navigation]}
      >
        {Data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <NftCard  img={slide.img} name={slide.name} currentBid={slide.currentBid}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons onPrev={swiperRef.current?.slidePrev()} onNext={swiperRef.current?.slideNext()}/>
      </>
       
    )
}
