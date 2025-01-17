import styled from "styled-components";
import colors from "../colors/colors";
import fonts from "../fonts/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${colors.gradient.ppGrd};
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
