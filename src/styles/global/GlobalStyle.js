import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default GlobalStyle;
