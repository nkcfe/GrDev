import { createGlobalStyle } from "styled-components";
import eng from "../assets/fonts/Lexend.ttf";
import han from "../assets/fonts/Nato.ttf";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        transition : all 0.2s ease-in-out;
    }
`;

export default GlobalStyle;
