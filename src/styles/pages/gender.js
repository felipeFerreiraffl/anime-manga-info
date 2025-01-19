import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${colors.gradient.ppGrd};

  .pagination {
    display: flex;
    align-items: center;
    gap: 0.9375rem; // 15px
    margin-top: 3.125rem; // 50px
    margin-bottom: 3.125rem;
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

export const PresentationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80%;
  justify-content: space-between;
  margin-top: 12.1875rem; // 195px
  border-bottom: solid 2px ${colors.main.pk600};
  padding-bottom: 3.4375rem; // 55px

  @media (max-width: 430px) {
    margin-top: 9.9375rem; // 159px
    padding-bottom: 1.25rem; // 20px
  }
`;

export const PresentationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem; // 10px

  @media (max-width: 430px) {
    gap: 1rem;
  }
`;

export const GenderTitle = styled.h1`
  font: ${fonts.title.ttl64};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.title.ttl32};
  }
`;

export const GenderPhrase = styled.p`
  font: ${fonts.text.txt24};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.text.txt12};
  }
`;

export const GenderImage = styled.img`
  height: 23.0625rem;

  @media (max-width: 430px) {
    height: 6.3125rem; // 101px
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem; // 20px
  margin-top: 6.25rem; // 100px
  width: 80%;

  @media (max-width: 430px) {
    gap: 0.3125rem; // 5px
    margin-top: 1.875rem; // 30px
  }
`;

export const GenderLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const GenderLoading = styled.p`
  font: ${fonts.detail.dtl36};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};
  }
`;
