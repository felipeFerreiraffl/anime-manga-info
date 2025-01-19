import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${colors.auxiliary.pp1000};
  border-radius: 5px;
  width: 100%;
  padding: 1.75rem 3.125rem;
  gap: 1.5625rem; // 25px
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.auxiliary.pp500};
  }

  @media (max-width: 430px) {
    padding: 0.8125rem 0.9375rem;
    gap: 0.625rem; // 25px
  }
`;

export const CardImage = styled.img`
  width: 8.375rem; // 134px
  aspect-ratio: 134 / 195;

  @media (max-width: 430px) {
    width: 2.3125rem; // 37px
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem; // 6px

  @media (max-width: 430px) {
    gap: 0.1875rem; // 3px
  }
`;

export const AnimeTitle = styled.h1`
  font: ${fonts.title.ttl40};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.title.ttl16};
  }
`;

export const AnimeJapTitle = styled.p`
  font: ${fonts.detail.dtl24};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl12};
  }
`;
