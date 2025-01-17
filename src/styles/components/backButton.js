import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  position: absolute;
  top: 132px;
  left: 131px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  .back-btn {
    font-size: 24px;
  }

  @media (max-width: 430px) {
    top: 113px;
    left: 33px;
    gap: 0.3125rem; // 5px

    .back-btn {
      font-size: 14px;
    }
  }
`;

export const BackText = styled.p`
  font: ${fonts.detail.dtl24};
  color: ${colors.main.pk1000};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl14};
  }
`;
