import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const SliderArea = styled.div`
  margin-top: 1.75rem; // 28px
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.875rem; // 30px
  width: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .button {
    font-size: 81px;
  }

  @media (max-width: 430px) {
    margin-top: 1.25rem;
    gap: 0.8125rem; // 13px

    .button {
      font-size: 18px;
    }
  }
`;

export const Object = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;

  @media (max-width: 430px) {
    gap: 0.4375rem; // 7px
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 12.5625rem; // 201px
  aspect-ratio: 67 / 94;
  border-radius: 5px;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }

  @media (max-width: 430px) {
    max-width: 3.625rem; // 58px
  }
`;

export const Image = styled.img`
  max-width: 12.5625rem; // 201px
  aspect-ratio: 67 / 94;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  @media (max-width: 430px) {
    max-width: 3.625rem; // 58px
  }
`;

export const Ranking = styled.p`
  font: ${fonts.detail.dtl40};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};
  }
`;

export const ImageHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(24, 24, 24, 0.8);
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

export const ContentName = styled.p`
  font: ${fonts.detail.dtl20};
  color: ${colors.neutral.nt0};
  text-align: center;

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl12};
  }
`;

export const SliderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;

export const LoadingImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.neutral.nt500};
  max-width: 12.5625rem; // 201px
  aspect-ratio: 67 / 94;
  border-radius: 5px;

  @media (max-width: 430px) {
    max-width: 3.625rem; // 58px
  }
`;

export const LoadingText = styled.p`
  font: ${fonts.detail.dtl40};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};
  }
`;
