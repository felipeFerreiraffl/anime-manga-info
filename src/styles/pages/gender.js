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
    background: transparent;
    transition: 0.3s ease-in-out;
  }

  .pagination .prev:hover,
  .pagination .next:hover {
    background: transparent;
    transform: scale(1.1);
  }
`;

export const PresentationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80%;
  justify-content: space-between;
  /* gap: 13rem; // 208px */
  margin-top: 12.1875rem; // 195px
  border-bottom: solid 2px ${colors.main.pk600};
  padding-bottom: 3.4375rem; // 55px
`;

export const PresentationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem; // 10px
`;

export const GenderTitle = styled.h1`
  font: ${fonts.title.ttl64};
  color: ${colors.neutral.nt0};
`;

export const GenderPhrase = styled.p`
  font: ${fonts.text.txt24};
  color: ${colors.neutral.nt0};
`;

export const GenderImage = styled.img`
  height: 23.0625rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem; // 20px
  margin-top: 6.25rem; // 100px
  width: 80%;
`;

export const GenderLoading = styled.p`
  font: ${fonts.detail.dtl36};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};
  }
`;
