import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";
import animeImg from "../../assets/images/home/anime-img.webp";
import mangaImg from "../../assets/images/home/manga-img.webp";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem; // 56px
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; // 8px
  text-align: center;
`;

export const Title = styled.h1`
  font: ${fonts.title.ttl64};
  color: ${colors.neutral.nt0};
`;

export const Subtitle = styled.p`
  font: ${fonts.text.txt24};
  color: ${colors.neutral.nt0};
  max-width: 80%;
`;

export const PageChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2.5rem;
  position: relative;
`;

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export const AnimeImage = styled.div`
  width: 100%;
  height: 25.8125rem;
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
`;

export const MangaImage = styled.div`
  width: 100%;
  height: 25.8125rem;
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
`;

export const ImageText = styled.h1`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10.5625rem;
  font: ${fonts.detail.dtl64};
  color: ${colors.neutral.nt0}; // 169px
`;
