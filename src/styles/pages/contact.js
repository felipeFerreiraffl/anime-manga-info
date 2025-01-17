import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.gradient.ppGrd};
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.9375rem; // 47px
  margin-top: 6.1875rem; // 99px
  margin-bottom: 7.9375rem; // 127px
  width: 80%;

  @media (max-width: 430px) {
  }
`;

export const MyImage = styled.img`
  width: 22.75rem; // 364px
  aspect-ratio: 1 / 1;

  @media (max-width: 430px) {
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7.3125rem; // 117px

  @media (max-width: 430px) {
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: solid 2px ${colors.main.pk600};
  padding-bottom: 1.9375rem; // 31px

  @media (max-width: 430px) {
  }
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 430px) {
  }
`;

export const Welcoming = styled.h1`
  font: ${fonts.title.ttl48};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
  }
`;

export const Explanation = styled.p`
  font: ${fonts.text.txt20};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
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
  }
`;

export const LinksTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4.6875rem; // 75px

  @media (max-width: 430px) {
  }
`;

export const LinkText = styled.a`
  font: ${fonts.detail.dtl32};
  color: ${colors.main.pk800};

  &:hover {
    
  }

  @media (max-width: 430px) {
  }
`;
