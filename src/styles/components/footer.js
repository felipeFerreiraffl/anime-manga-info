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
`;

export const FooterText = styled.p`
    font: ${fonts.detail.dtl15};
    color: ${colors.neutral.nt0};
`;