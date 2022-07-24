import React from "react";
import styled from "styled-components";

import CarouselContent from "./CarouselContent";

import one from "../Assets/svgs/swiperCardOne.svg";
import two from "../Assets/svgs/swiperCardTwo.svg";
import three from "../Assets/svgs/swiperCardThree.svg";
import four from "../Assets/svgs/swiperCardFour.svg";
import five from "../Assets/svgs/swiperCardFive.svg";
import six from "../Assets/svgs/swiperCardSix.svg";
import prev from "../Assets/svgs/swiperPrev.svg";
import next from "../Assets/svgs/swiperNext.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = () => {
  return (
    <CarouselSec>
      <div className=".swiper-custom-navigation swiper-custom-navigation-prev backNavigate">
        <img className="backward" src={prev} alt="prev" />
      </div>
      <div className="swiper-pagination"></div>
      <Swiper
        className="swiperContent"
        navigation={{
          prevEl: ".swiper-custom-navigation-prev",
          nextEl: ".swiper-custom-navigation-next",
        }}
        spaceBetween={3}
        slidesPerView={1}
        pagination={true}
      >
        <SwiperSlide className="swiper">
          <CarouselContent
            heading="Download the App"
            details="Download our mobile application or register on our website to start trading gift cards easily as bosses do."
            bottomImage={one}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselContent
            heading="Login or Register"
            details="Log in and get familiar with the three-step gift card exchange process that takes only a few minutes to complete."
            bottomImage={two}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselContent
            heading="Friendly Rates 🤙"
            details="Worry not about rates, we offer the best payouts for your assets based on the current average market prices."
            bottomImage={three}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselContent
            heading="Simplified User Interface"
            details="Our platform is built with your best interest at heart, helping you sell gift cards using the simplest user interface."
            bottomImage={four}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselContent
            heading="Quick Payments"
            details="Our payment system is amazingly coherent. You get your money almost instantly, no fees attached, no limits."
            bottomImage={five}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselContent
            heading="All we do is Reply"
            details="Have a question? Our FAQ page is a whole knowledge base. Our support team is also available via live chat."
            bottomImage={six}
          />
        </SwiperSlide>
      </Swiper>
      <div className=".swiper-custom-navigation swiper-custom-navigation-next frontNavigate">
        <img className="forward" src={next} alt="next" />
      </div>
    </CarouselSec>
  );
};

const CarouselSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  .swiperContent {
    height: 331.5px !important;
    width: 520px !important;
    border-radius: 20px;
    background-color: #fff;
  }
  .swiper-pagination-bullet-active {
    background-color: #333333 !important ;
    width: 25px !important ;
    height: 6px !important;
    border-radius: 5px !important;
    transform-origin: 50% 50% !important;
    transition: all 0.5s linear;
  }
`;

export default Carousel;
