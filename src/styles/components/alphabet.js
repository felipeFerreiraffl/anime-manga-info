import styled from "styled-components";
import colors from "../colors/colors";

export const AlphabetArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.375rem; // 22px
  gap: 1.375rem;
  border-bottom: solid 2px ${colors.main.pk600};
  padding-bottom: 2.5625rem; // 41px
`;

export const FirstLine = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SecondLine = styled(FirstLine)``;
