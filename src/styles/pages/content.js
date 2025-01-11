import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
