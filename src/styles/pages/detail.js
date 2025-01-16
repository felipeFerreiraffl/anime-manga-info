import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";
import { SectionContainer, SectionTitle } from "./content";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${colors.gradient.ppGrd};
`;

export const InitialDetails = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  gap: 1.875rem; // 30px
  margin-top: 13.4375rem; // 215px
  position: relative;
  padding: 2.6875rem 2.1875rem; // 43px 35px
  padding-bottom: 55px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    z-index: 1;
    opacity: 0.2;
  }
`;

export const Divisor = styled.hr`
  width: 80%;
  background-color: ${colors.main.pk600};
  height: 2px;
  border: none;
  margin-top: 55px;
`;

export const ContentImage = styled.img`
  width: 14.5625rem; // 233px
  aspect-ratio: 233 / 327;
  border-radius: 5px;
  z-index: 10;
`;

export const ContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
`;

export const ContentRanking = styled.p`
  font: ${fonts.detail.dtl32};
  color: ${colors.neutral.nt0};
  z-index: 10;
`;

export const ContentTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.25rem;
  gap: 0.5rem; // 8px
  z-index: 10;
`;

export const ContentTitle = styled.h1`
  font: ${fonts.title.ttl48};
  color: ${colors.neutral.nt0};
  margin-top: 1.5625rem; // 25px
  z-index: 10;
`;

export const ContentAltTitle = styled.p`
  font: ${fonts.detail.dtl24};
  color: ${colors.neutral.nt0};
  z-index: 10;
`;

export const ContentRatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.8125rem; // 77px
  gap: 0.5rem; // 8px
  z-index: 10;
`;

export const ContentRating = styled.p`
  font: ${fonts.text.txt32};
  color: ${colors.neutral.nt0};
  z-index: 10;
`;

export const ContentRatingColor = styled.div`
  width: 1.5625rem; // 25px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  z-index: 10;
`;

export const ContentSection = styled(SectionContainer)`
  margin-top: 3.75rem; // 60px
`;

export const ContentSectionTitle = styled(SectionTitle)``;

export const Synopsis = styled.p`
  font: ${fonts.text.txt20};
  color: ${colors.neutral.nt0};
  text-align: justify;
  margin-top: 1.5625rem; // 25px
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5625rem; // 25px
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3.125rem; // 50px
  background-color: ${colors.auxiliary.pp1000};
  border-radius: 5px;
  padding: 1.5625rem 2.5rem;
`;

export const InfosText = styled.p`
  font: ${fonts.detail.dtl36};
  color: ${colors.neutral.nt0};
`;
