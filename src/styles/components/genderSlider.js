import styled from "styled-components";

export const GenderArea = styled.div`
  margin-top: 1.75rem; // 28px
  position: relative;
  display: flex;
  align-items: center;
  gap: 2.1875rem; // 35px
  width: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .button {
    font-size: 81px;
  }

  @media (max-width: 430px) {
    margin-top: 1.25rem;
    gap: 0.625rem;

    .button {
      font-size: 18px;
    }
  }
`;

export const GenderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;
