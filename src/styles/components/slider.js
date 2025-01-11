import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const SliderArea = styled.div`
  margin-top: 1.75rem; // 18px
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.875rem; // 30px
  width: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;
  }
`;

export const Object = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`;

export const Image = styled.img`
  max-width: 201px;
  height: 282px;
  /* aspect-ratio: 67 / 94; */
  border-radius: 5px;
`;

export const Ranking = styled.p`
  font: ${fonts.detail.dtl40};
  color: ${colors.neutral.nt0};
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
