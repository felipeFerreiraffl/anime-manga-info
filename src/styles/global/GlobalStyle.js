import { createGlobalStyle } from "styled-components";
import colors from "../colors/colors";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        overflow: hidden;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        background: ${colors.gradient.ppGrd};
    }
`;

export default GlobalStyle;
