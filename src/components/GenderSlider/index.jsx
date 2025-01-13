import { useEffect, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import genderImages from "../../assets/images/gender/card/genderImages";
import colors from "../../styles/colors/colors";
import { GenderArea, GenderButton } from "../../styles/components/genderSlider";
import GenderCard from "../GenderCard";
import { useNavigate } from "react-router-dom";

export default function GenderSlider() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [swiper, setSwiper] = useState(null);
  const navigate = useNavigate(); // Variável de navegação

  useEffect(() => {
    if (showPrevButton && showNextButton) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }, [showPrevButton, showNextButton]);

  return (
    <GenderArea>
      {showPrevButton && (
        <GenderButton onClick={() => swiper?.slidePrev()}>
          <HiArrowCircleLeft size={81} color={colors.main.pk600} />
        </GenderButton>
      )}

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setShowPrevButton(swiper.activeIndex > 0);
          setShowNextButton(
            swiper.activeIndex + slidesPerView < genderImages.length
          );
        }}
      >
        {genderImages.map((image) => (
          <SwiperSlide key={image.id}>
            <GenderCard onClick={() => navigate(`/genero/${image.page}`)} background={image.image} gender={image.gender} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showNextButton && (
        <GenderButton onClick={() => swiper?.slideNext()}>
          <HiArrowCircleRight size={81} color={colors.main.pk600} />
        </GenderButton>
      )}
    </GenderArea>
  );
}
