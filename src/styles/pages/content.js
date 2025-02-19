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
  padding-bottom: 3.25rem; // 52px
  width: 80%;

  @media (max-width: 430px) {
    margin-top: 6.3125rem; // 101px
    padding-bottom: 1.5625rem; // 25px;
  }
`;

export const Title = styled.h1`
  font: ${fonts.title.ttl96};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.title.ttl40};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.3125rem; // 37px
  gap: 1.125rem; // 18px

  @media (max-width: 430px) {
    margin-top: 0.9375rem; // 15px
    gap: 0.3125rem; // 5px
  }
`;

export const SearchArea = styled.div`
  background-color: ${colors.neutral.nt200};
  margin-top: 3.75rem; // 60px
  border: solid 2px ${colors.main.pk1000};
  border-radius: 20px;
  padding: 0.75rem 6.75rem; // 12px 108px
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
  transition: 0.3s ease-in-out;

  .search {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    font-size: 25px;
  }

  @media (max-width: 430px) {
    margin-top: 2.8125rem; // 45px
    padding: 0.5rem 3.125rem; // 8px 50px

    .search {
      font-size: 15px;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
    }
  }
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

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl12};

    &::placeholder {
      font: ${fonts.detail.dtl12};
    }
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

  @media (max-width: 430px) {
    top: 40px;
    max-height: 16.5rem;
  }
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

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl12};
  }
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
    gap: 0.9375rem; // 15px
    margin-top: 3.125rem; // 50px
  }

  .pagination li {
    background-color: ${colors.main.pk800};
    padding: 0.5rem 1.3125rem; // 8px 21px
    border-radius: 5px;
    font: ${fonts.title.ttl32};
    color: ${colors.neutral.nt0};
    cursor: pointer;
    transition: 0.3s ease-in-out;
    width: 80%;
  }

  .pagination .active {
    background-color: ${colors.main.pk400};
  }

  .pagination li:hover {
    background-color: ${colors.main.pk400};
  }

  .pagination .prev,
  .pagination .next {
    font-size: 54px;
    padding: 0;
    background: transparent;
    transition: 0.3s ease-in-out;
  }

  .pagination .prev:hover,
  .pagination .next:hover {
    background: transparent;
    transform: scale(1.1);
  }

  @media (max-width: 430px) {
    margin-top: 3.125rem; // 50px

    .pagination {
      gap: 0.3125rem; // 5px
      margin-top: 1.5625rem; // 25px
      margin-bottom: 1.25rem; // 20px
    }

    .pagination li {
      padding: 0.125rem 0.5rem; // 2px 8px
      font: ${fonts.title.ttl14};
    }

    .pagination .prev,
    .pagination .next {
      font-size: 16px;
    }
  }
`;

export const SectionTitle = styled.h2`
  font: ${fonts.title.ttl64};
  color: ${colors.main.pk600};
  border-bottom: solid 2px ${colors.main.pk600};
  padding-bottom: 0.625rem;
  width: 100%;

  @media (max-width: 430px) {
    font: ${fonts.title.ttl32};
  }
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.3125rem; // 37px
  gap: 1.5625rem; // 25px
  width: 100%;

  @media (max-width: 430px) {
    margin-top: 1.25rem; // 20px
    gap: 0.9375rem; // 15px
  }
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

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl20};
  }
`;

export const ContentCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 3.125rem; // 
  
  @media (max-width: 430px) {
    gap: 0.3125rem; // 5px
    margin-top: 1.5625rem; // 25px
  }
`;

export const ContentCardLoading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 3.125rem; // 50px

  @media (max-width: 430px) {
    gap: 0.3125rem; // 5px
    margin-top: 1.5625rem; // 25px
  }
`;

export const ContentCardLoadingText = styled.p`
  font: ${fonts.detail.dtl40};
  color: ${colors.main.pk400};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};
  }
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

  @media (max-width: 430px) {
    margin-top: 2.1875rem; // 35px
    padding-top: 2.1875rem;
    gap: 0.4375rem; // 7px
  }
`;

export const FinalImage = styled.img`
  width: 24.9375rem; // 399px
  aspect-ratio: 1 / 1;

  @media (max-width: 430px) {
    width: 8.625rem; // 138px
  }
`;

export const FinalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.75rem; // 60px

  @media (max-width: 430px) {
    gap: 1.25rem;
  }
`;

export const FinalTitle = styled.h1`
  font: ${fonts.title.ttl64};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.title.ttl24};
  }
`;

export const FinalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.375rem; // 22px

  @media (max-width: 430px) {
    gap: 0.625rem;
  }
`;

export const FinalContentTitle = styled.h2`
  font: ${fonts.detail.dtl40};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl16};
  }
`;

export const FinalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem; // 15px

  @media (max-width: 430px) {
    gap: 0.625rem; // 10px
  }
`;
