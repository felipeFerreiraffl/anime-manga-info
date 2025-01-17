import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.gradient.ppGrd};
  height: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.9375rem; // 47px
  margin-top: 6.1875rem; // 99px
  margin-bottom: 7.9375rem; // 127px
  width: 80%;

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 1.4375rem; // 23px
    margin-top: 3.5rem; // 56px
    margin-bottom: 8.8125rem; // 141px
  }
`;

export const MyImage = styled.img`
  width: 22.75rem; // 364px
  aspect-ratio: 1 / 1;

  @media (max-width: 430px) {
    width: 9.375rem; // 150px
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7.3125rem; // 117px

  @media (max-width: 430px) {
    gap: 2.5rem; // 40px
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: solid 2px ${colors.main.pk600};
  padding-bottom: 1.9375rem; // 31px

  @media (max-width: 430px) {
    gap: 0.3125rem; // 5px
    padding-bottom: 2.8125rem; // 45px
    align-items: center;
    text-align: center;
    width: 80%;
  }
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 430px) {
    gap: 0.3125rem;
  }
`;

export const Welcoming = styled.h1`
  font: ${fonts.title.ttl48};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.title.ttl24};
  }
`;

export const Explanation = styled.p`
  font: ${fonts.text.txt20};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.text.txt12};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8125rem; // 45px

  .link-icn {
    font-size: 47px;
  }

  @media (max-width: 430px) {
    gap: 1.125rem; // 18px

    .link-icn {
      font-size: 16px;
    }
  }
`;

export const LinksTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4.6875rem; // 75px

  @media (max-width: 430px) {
    gap: 0.5rem;
  }
`;

export const LinkText = styled.a`
  font: ${fonts.detail.dtl32};
  color: ${colors.main.pk800};
  background: linear-gradient(${colors.main.pk600}, ${colors.main.pk600}) bottom /
    0% 2px no-repeat;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${colors.main.pk600};
    background-size: 100% 2px;
  }

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};    
  }
`;
