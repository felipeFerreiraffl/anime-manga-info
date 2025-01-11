import { useRef, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import test from "../../assets/images/img-test.png";
import colors from "../../styles/colors/colors";
import {
  Image,
  SliderArea,
  SliderButton,
} from "../../styles/components/slider";

const images = [test, test, test, test, test, test, test, test, test, test];

export default function SliderContent() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [showPrevButton, setShowPrevButton] = useState(false);

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <SliderArea>
      {showPrevButton && (
        <SliderButton ref={prevButtonRef.current} className="prev-button">
          <HiArrowCircleLeft size={81} color={colors.main.pk600} />
        </SliderButton>
      )}

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        pagination={{ clickable: true }}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        onSlideChange={(swiper) => {
          setShowPrevButton(swiper.activeIndex > 1);
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.navigation.update();
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div>
              <Image src={img} alt="Imagem" />
              <p>{i}º</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderButton ref={nextButtonRef.current} className="next-button">
        <HiArrowCircleRight size={81} color={colors.main.pk600} />
      </SliderButton>
    </SliderArea>
  );
}
