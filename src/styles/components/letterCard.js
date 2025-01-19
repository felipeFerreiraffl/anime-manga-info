import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4375rem; // 39px
  aspect-ratio: 1 / 1;
  background: ${colors.gradient.pkGrd2};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${colors.main.pk400};
  }

  &.active {
    background: ${colors.main.pk400};
  }

  @media (max-width: 430px) {
    width: 0.9375rem; // 15px
  }
`;

export const Letter = styled.p`
  font: ${fonts.detail.dtl20};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl10};
  }
`;

