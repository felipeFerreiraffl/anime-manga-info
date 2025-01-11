import { useEffect, useRef, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import test from "../../assets/images/img-test.png";
import colors from "../../styles/colors/colors";
import {
  Image,
  Object,
  Ranking,
  SliderArea,
  SliderButton,
} from "../../styles/components/slider";

const images = [test, test, test, test, test, test, test, test, test, test];

export default function SliderContent({ image, ranking, separator }) {
  // Estado para quantos slides serão vistos com ou sem o botão
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Estado para mostrar ou esconder o botão
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  // Estado do Swiper
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (showPrevButton && showNextButton) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }, [showPrevButton, showNextButton]);

  return (
    <SliderArea>
      {showPrevButton && (
        <SliderButton onClick={() => swiper?.slidePrev()}>
          <HiArrowCircleLeft size={81} color={colors.main.pk600} />
        </SliderButton>
      )}

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setShowPrevButton(swiper.activeIndex > 0);
          setShowNextButton(swiper.activeIndex + slidesPerView < images.length);
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Object>
              <Image src={img} alt="Imagem" />
              <Ranking>{ranking != null ? `${i}º ${separator} ${ranking}` : ""}</Ranking>
            </Object>
          </SwiperSlide>
        ))}
      </Swiper>

      {showNextButton && (
        <SliderButton onClick={() => swiper?.slideNext()}>
          <HiArrowCircleRight size={81} color={colors.main.pk600} />
        </SliderButton>
      )}
    </SliderArea>
  );
}
