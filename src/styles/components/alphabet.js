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

  @media (max-width: 430px) {
    margin-top: 1.25rem;
    gap: 0.625rem;
  }
`;

export const FirstLine = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 430px) {
    gap: 0.3125rem; // 5px
  }
`;

export const SecondLine = styled(FirstLine)``;
