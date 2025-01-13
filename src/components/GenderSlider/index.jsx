import { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { GenderArea } from "../../styles/components/genderSlider";
import genderImages from "../../assets/images/gender/card/genderImages";
import GenderCard from "../GenderCard";

export default function GenderSlider() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    if (showPrevButton && showNextButton) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }, [showPrevButton, showNextButton]);

  return (
    <GenderArea>
      <HiArrowCircleLeft />

      <Swiper>
        {genderImages.map(image => (
            <SwiperSlide key={image.genders.id}>
                <GenderCard background={image.genders.image} gender={image.genders.gender} />
            </SwiperSlide>
        ))}
      </Swiper>

      <HiArrowCircleRight />
    </GenderArea>
  );
}
