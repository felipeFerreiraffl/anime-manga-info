import styled from "styled-components";
import { SliderButton } from "../components/slider";

export const GenderArea = styled.div`
  margin-top: 1.75rem; // 18px
  position: relative;
  display: flex;
  align-items: center;
  gap: 2.1875rem; // 35px
  width: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;
  }
`;

export const GenderButton = styled.button(SliderButton)``;
