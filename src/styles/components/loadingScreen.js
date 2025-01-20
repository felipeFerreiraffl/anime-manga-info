import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 0.5rem;
  background: ${colors.gradient.ppGrd};

  @media (max-width: 430px) {
   gap: 1rem; // 16px
  }
`;

export const LoadingLogo = styled.img`
  width: 10rem;
  aspect-ratio: 1 / 1;

  @media (max-width: 430px) {
    width: 8.125rem; // 130px 
  }
`;

export const LoadingText = styled.p`
  font: ${fonts.detail.dtl32};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl16};
  }
`;
