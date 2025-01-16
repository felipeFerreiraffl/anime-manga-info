import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2.8125rem; // 45px
  gap: 13.125rem; // 210px

  @media (max-width: 430px) {
      gap: 5.3125rem; // 85px
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 2rem;
  aspect-ratio: 1 / 1;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.5);
  }

  @media (max-width: 430px) {
    width: 1.125rem; // 18px
  }
`;

export const PageText = styled.p`
  font: ${fonts.detail.dtl20};
  color: ${colors.main.pk1000};
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${colors.main.pk600};
  }

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};
    color: ${colors.main.pk1000};
  }
`;
