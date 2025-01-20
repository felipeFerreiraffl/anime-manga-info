import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.8125rem; // 205px
  aspect-ratio: 1 / 1;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ $bgImage }) => `url(${$bgImage})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    z-index: 1;
    opacity: 0.2;
    transition: 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 0.65;
  }

  @media (max-width: 430px) {
    width: 3.5625rem; // 57px
  }
`;

export const Gender = styled.p`
  font: ${fonts.detail.dtl40};
  color: ${colors.neutral.nt0};
  z-index: 10;

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl12};
  }
`;
