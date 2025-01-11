import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";
import animeImg from "../../assets/images/home/anime-img.webp";
import mangaImg from "../../assets/images/home/manga-img.webp";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.gradient.ppGrd};
  height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; // 8px
  text-align: center;
  margin-top: 3.5rem; // 56px

  @media (max-width: 430px) {
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  font: ${fonts.title.ttl64};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.title.ttl32};
    color: ${colors.neutral.nt0};
  }
`;

export const Subtitle = styled.p`
  font: ${fonts.text.txt24};
  color: ${colors.neutral.nt0};
  max-width: 80%;

  @media (max-width: 430px) {
    font: ${fonts.text.txt12};
    color: ${colors.neutral.nt0};
  }
`;

export const PageChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2.5rem;
  position: relative;

  @media (max-width: 430px) {
    margin-top: 4.9375rem; // 79px
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.8);

  @media (max-width: 430px) {
    width: 68px;
    height: 68px;
  }
`;

export const AnimeImage = styled.div`
  width: 100%;
  height: 25.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: relative;

  /* Opacidade da imagem */
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.2;
    background-image: url(${animeImg});
    transition: 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 0.7;
  }

  @media (max-width: 430px) {
    height: 18.4375rem; // 295px
  }
`;

export const MangaImage = styled.div`
  width: 100%;
  height: 25.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.2;
    background-image: url(${mangaImg});
    transition: 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 0.7;
  }

  @media (max-width: 430px) {
    height: 18.4375rem; // 295px
  }
`;

export const ImageText = styled.h1`
  position: relative;
  z-index: 2;
  font: ${fonts.detail.dtl64};
  color: ${colors.neutral.nt0}; // 169px

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl24};
    color: ${colors.neutral.nt0};
  }
`;
