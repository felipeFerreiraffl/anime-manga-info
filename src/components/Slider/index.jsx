import { useEffect, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAnimesByFilter, getMangasByFilter } from "../../services/animeAPI";
import colors from "../../styles/colors/colors";
import {
  ContentName,
  Image,
  ImageContainer,
  ImageHover,
  LoadingImage,
  LoadingText,
  Object,
  Ranking,
  SliderArea,
  SliderButton,
} from "../../styles/components/slider";

export default function SliderContent({
  type,
  filter,
  separator,
  contentLength,
}) {
  // Estado para quantos slides serão vistos com ou sem o botão
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Estado para mostrar ou esconder o botão
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [swiper, setSwiper] = useState(null); // Estado do Swiper

  const [content, setContent] = useState([]); // Estado de animes para os slides
  const [loading, setLoading] = useState(true); // Estado de carregamento dos itens

  const navigate = useNavigate(); // Variável de navegação

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
        const response =
          type === "anime"
            ? await getAnimesByFilter(filter, contentLength)
            : await getMangasByFilter(filter, contentLength);

        setContent(response.data);
      } catch (error) {
        console.error("Erro ao buscar animes. ", error);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchAnimes();
  }, [type, filter, separator, contentLength]); // Recarrega as informações toda vez que muda de página

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
        {content.map((content, i) => {
          return (
            <SwiperSlide key={content.id}>
              <Object>
                {/* Imagem de carregamento */}
                {loading && (
                  <LoadingImage>
                    <LoadingText>Carregando...</LoadingText>
                  </LoadingImage>
                )}
                {/* Container com a imagem para o hover */}
                <ImageContainer
                  onClick={() =>
                    type === "anime"
                      ? navigate(`/anime/${content.id}`)
                      : navigate(`/manga/${content.id}`)
                  }
                >
                  <Image
                    src={content.attributes.posterImage.original}
                    alt={`Capa de ${content.attributes.canonicalTitle}`}
                  />
                  {/* Aparece apenas depois do hover */}
                  <ImageHover className="overlay">
                    <ContentName>
                      {content.attributes.canonicalTitle}
                    </ContentName>
                  </ImageHover>
                </ImageContainer>
                <Ranking>
                  {filter !== "sort=-startDate"
                    ? `${i + 1}º ${separator} ${
                        content.attributes.averageRating
                      }`
                    : ""}
                </Ranking>
              </Object>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {showNextButton && (
        <SliderButton onClick={() => swiper?.slideNext()}>
          <HiArrowCircleRight size={81} color={colors.main.pk600} />
        </SliderButton>
      )}
    </SliderArea>
  );
}
