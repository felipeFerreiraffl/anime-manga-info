import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.gradient.ppGrd};
`;

export const InitialPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5.625rem; // 90px
  border-bottom: solid 2px ${colors.main.pk600};
  padding-bottom: 52px;
  width: 80%;
`;

export const Title = styled.h1`
  font: ${fonts.title.ttl96};
  color: ${colors.neutral.nt0};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.3125rem; // 37px
  gap: 1.125rem; // 18px
`;

export const SearchArea = styled.div`
  background-color: ${colors.neutral.nt200};
  margin-top: 3.75rem; // 60px
  border: solid 2px ${colors.main.pk1000};
  border-radius: 20px;
  padding: 12px 108px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
  transition: 0.3s ease-in-out;
`;

export const Search = styled.input`
  outline: none;
  border: none;
  text-align: center;
  background-color: ${colors.neutral.nt200};
  font: ${fonts.detail.dtl20};
  color: ${colors.neutral.nt1000};

  &::placeholder {
    font: ${fonts.detail.dtl20};
    color: ${colors.neutral.nt500};
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5.25rem; // 84px
  width: 80%;
`;

export const SectionTitle = styled.h2`
  font: ${fonts.title.ttl64};
  color: ${colors.main.pk600};
  border-bottom: solid 2px ${colors.main.pk600};
  padding-bottom: 0.625rem;
  width: 100%;
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.3125rem; // 37px
  gap: 1.5625rem; // 25px
  width: 100%;
`;

export const SubSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SubSectionTitle = styled.h3`
  font: ${fonts.detail.dtl48};
  color: ${colors.main.pk400};
`;

export const ContentCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 3.125rem; // 50px
`;

export const ContentCardLoading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 3.125rem; // 50px
`;

export const ContentCardLoadingText = styled.p`
  font: ${fonts.detail.dtl40};
  color: ${colors.main.pk400};
`;
