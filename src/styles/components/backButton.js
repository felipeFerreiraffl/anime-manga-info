import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  position: absolute;
  top: 132px;
  left: 131px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BackText = styled.p`
  font: ${fonts.detail.dtl24};
  color: ${colors.main.pk1000};
`;
