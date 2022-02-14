import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import { startersPokemon } from "../../../data/startersPokemon";
import { SlidesElements } from "./SlidesElements";


export const Slides = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
            startersPokemon.map((starter)=>(
              <SwiperSlide key={starter.generation} >
                <SlidesElements {...starter} />
              </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
