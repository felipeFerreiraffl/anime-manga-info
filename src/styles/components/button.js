import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const ButtonView = styled.button`
  background: ${colors.gradient.pkGrd2};
  border: none;
  padding: 0.625rem 2.0625rem; // 10px 33px
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }

  @media (max-width: 430px) {
    padding: 0.375rem 0.5rem; // 6px 8px
  }
`;

export const ButtonText = styled.p`
  font: ${fonts.detail.dtl24};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl12};
  }
`;
