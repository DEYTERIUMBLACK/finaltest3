import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import './style.css'
export default () => {
  return (
    <Swiper className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg"
          alt=""
        />
        <div className="sliderinfo">
          <h1>Tasty Delicious Food</h1>
          <button>Book a table</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
