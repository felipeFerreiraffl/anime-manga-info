import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.neutral.nt800};
  padding-top: 1.0625rem; // 17px
  padding-bottom: 1.0625rem; // 17px

  @media (max-width: 430px) {
    padding-top: 0.4375rem; // 7px
    padding-bottom: 0.4375rem; // 7px
  }
`;

export const FooterText = styled.p`
  font: ${fonts.detail.dtl15};
  color: ${colors.neutral.nt0};

  @media (max-width: 430px) {
    font: ${fonts.detail.dtl10};
  }
`;
