import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${colors.auxiliary.pp1000};
  border-radius: 5px;
  width: 100%;
  margin-top: 3.125rem; // 50px
  padding: 28px 50px;
  gap: 1.5625rem; // 25px
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  &:hover {
    background-color: ${colors.auxiliary.pp500};
  }
`;

export const CardImage = styled.img`
  width: 8.375rem; // 134px
  aspect-ratio: 134 / 195;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem; // 6px
`;

export const AnimeTitle = styled.h1`
  font: ${fonts.title.ttl40};
  color: ${colors.neutral.nt0};
`;

export const AnimeJapTitle = styled.p`
  font: ${fonts.detail.dtl24};
  color: ${colors.neutral.nt0};
`;
