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

export const Results = styled.div`
  position: absolute;
  top: 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  z-index: 10;
  background-color: ${colors.auxiliary.pp1000};
  width: 100%;
  padding: 1rem 0.625rem;
  border-radius: 5px;
  max-height: 18rem;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const SuggestionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: calc(100% - 0.625rem);
  padding: 0.375rem;
  border-radius: 5px;
  background-color: ${colors.auxiliary.pp500};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  z-index: 20;

  &:hover {
    background-color: ${colors.main.pk1000};
  }
`;

export const SuggestionImage = styled.img`
  width: 3rem;
  aspect-ratio: 48 / 67;
  border-radius: 2px;
`;

export const SuggestionTitle = styled.p`
  font: ${fonts.detail.dtl14};
  color: ${colors.neutral.nt0};
`;

export const SuggestionError = styled.p`
  font: ${fonts.detail.dtl20};
  color: ${colors.neutral.nt0};
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5.25rem; // 84px
  width: 80%;

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.9375rem; // 15px
  }

  .pagination li {
    margin-top: 4.25rem; // 68px
    background-color: ${colors.main.pk800};
    font: ${fonts.title.ttl32};
    color: ${colors.neutral.nt0};
    padding: 8px 21px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
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

export const FinalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 6.25rem; // 100px
  border-top: solid 2px ${colors.main.pk600};
  padding-top: 4.25rem; // 68px
  gap: 7.1875rem; // 115px
`;

export const FinalImage = styled.img`
  width: 24.9375rem; // 399px
  aspect-ratio: 1 / 1;
`;

export const FinalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.75rem; // 60px
`;

export const FinalTitle = styled.h1`
  font: ${fonts.title.ttl64};
  color: ${colors.neutral.nt0};
`;

export const FinalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.375rem; // 22px
`;

export const FinalContentTitle = styled.h2`
  font: ${fonts.detail.dtl40};
  color: ${colors.neutral.nt0};
`;

export const FinalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem; // 15px
`;
