import styled from "styled-components";
import fonts from "../fonts/fonts";
import colors from "../colors/colors";

export const ButtonView = styled.button`
    background: ${colors.gradient.pkGrd2};
    border: none;
    padding: 10px 33px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        filter: brightness(1.2);
    }
`;

export const ButtonText = styled.p`
    font: ${fonts.detail.dtl24};
    color: ${colors.neutral.nt0};
`;