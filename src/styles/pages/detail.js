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
  }

  @media (max-width: 430px) {
    gap: 0.5rem; // 8px
    margin-top: 9rem; // 144px
    padding: 1.25rem 1.1875rem; // 20px 19px
  }
`;

export const Divisor = styled.hr`
  width: 80%;
  background-color: ${colors.main.pk600};
  height: 2px;
  border: none;
  margin-top: 3.4375rem; // 55px

  @media (max-width: 430px) {
    margin-top: 1.5625rem; //
  }
`;

export const ContentImage = styled.img`
  width: 14.5625rem; // 233px
  aspect-ratio: 233 / 327;
  border-radius: 5px;
  z-index: 10;

  @media (max-width: 430px) {
    width: 4.6875rem; // 75px
  }
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

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl12};
  }
`;

export const ContentTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.25rem; // 20px
  gap: 0.5rem; // 8px
  z-index: 10;

  @media (max-width: 430px) {
    margin-top: 0.5rem; // 8px
    gap: 0.1875rem; // 3px
  }
`;

export const ContentTitle = styled.h1`
  font: ${fonts.title.ttl48};
  color: ${colors.neutral.nt0};
  margin-top: 1.5625rem; // 25px
  z-index: 10;

  @media (max-width: 430px) {
    font: ${fonts.title.ttl20};
    margin-top: 0.3125rem; // 5px
  }
`;

export const ContentAltTitle = styled.p`
  font: ${fonts.detail.dtl24};
  color: ${colors.neutral.nt0};
  z-index: 10;

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl10};
  }
`;

export const ContentRatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.8125rem; // 77px
  gap: 0.5rem; // 8px
  z-index: 10;

  @media (max-width: 430px) {
    margin-top: 0.8125rem; // 9px
    gap: 0.3125rem; // 5px
  }
`;

export const ContentRating = styled.p`
  font: ${fonts.text.txt32};
  color: ${colors.neutral.nt0};
  font-weight: bold;
  z-index: 10;

  @media (max-width: 430px) {
    font: ${fonts.text.txt12};
  }
`;

export const ContentRatingColor = styled.div`
  width: 1.5625rem; // 25px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  z-index: 10;

  @media (max-width: 430px) {
    width: 0.75rem; // 12px;
  }
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

  @media (max-width: 430px) {
    font: ${fonts.text.txt10};
    margin-top: 1.25rem; // 20px
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5625rem; // 25px
  width: 90%;
  margin-top: 1rem;
  margin-bottom: 3.125rem; // 50px
  background-color: ${colors.auxiliary.pp1000};
  border-radius: 5px;
  padding: 1.5625rem 2.5rem;

  @media (max-width: 430px) {
    gap: 0.9375rem; // 15px
    margin-top: 1.25rem;
    margin-bottom: 1.25rem; // 20px
    padding: 0.9375rem;
  }
`;

export const InfosText = styled.p`
  font: ${fonts.detail.dtl36};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
