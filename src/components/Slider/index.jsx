import { useEffect, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAnimesByFilter, getMangasByFilter } from "../../services/animeAPI";
import colors from "../../styles/colors/colors";
import {
  Image,
  LoadingImage,
  LoadingText,
  Object,
  Ranking,
  SliderArea,
  SliderButton,
} from "../../styles/components/slider";

export default function SliderContent({ type, filter, separator, contentLength }) {
  // Estado para quantos slides serão vistos com ou sem o botão
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Estado para mostrar ou esconder o botão
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [swiper, setSwiper] = useState(null); // Estado do Swiper

  const [content, setContent] = useState([]); // Estado de animes para os slides
  const [loading, setLoading] = useState(true); // Estado de carregamento dos itens

  // Mostrar o botão de voltar quando trocar de slide
  useEffect(() => {
    if (showPrevButton && showNextButton) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }, [showPrevButton, showNextButton]);

  // Carrega os animes
  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        if (type === "anime") {
          const response = await getAnimesByFilter(filter, contentLength);

          setContent(response);
        } else {
          const response = await getMangasByFilter(filter, contentLength);

          setContent(response);
        }
      } catch (error) {
        console.error("Erro ao buscar animes. ", error);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchAnimes();
  }, [filter]);

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
          setShowNextButton(
            swiper.activeIndex + slidesPerView < content.length
          );
        }}
      >
        {content.map((anime, i) => (
          <SwiperSlide key={anime.id}>
            {loading ? (
              <Object>
                <LoadingImage>
                  <LoadingText>Carregando...</LoadingText>
                </LoadingImage>
              </Object>
            ) : (
              <Object>
                <Image
                  src={anime.attributes.posterImage.original}
                  alt={`Capa de ${anime.attributes.canonicalTitle}`}
                />
                <Ranking>
                  {filter !== "sort=-startDate"
                    ? `${i + 1}º ${separator} ${anime.attributes.averageRating}`
                    : ""}
                </Ranking>
              </Object>
            )}
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
