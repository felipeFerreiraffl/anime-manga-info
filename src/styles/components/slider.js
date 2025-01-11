import styled from "styled-components";

export const SliderArea = styled.div`
    margin-top: 1.75rem; // 18px
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.875rem; // 30px
    width: 100%;

    .swiper-container {
        width: 100%;
        height: 100%;
    }

    .next-button,
    .prev-button {
        z-index: 10;
        transition: 0.3s ease-in-out;
    }

    .next-button:hover,
    .prev-button:hover {
        filter: brightness(1.2);
        transform: scale(1.1);
    }
`;

export const Image = styled.img`
    max-width: 201px;
    height: 282px;
    /* aspect-ratio: 67 / 94; */
    border-radius: 5px;
`;

export const SliderButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;