import { createGlobalStyle } from "styled-components";

const AccessStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%; /* Garante que o body ocupe a altura total */
}

.ativo {
    border-radius: 40px;
    background: rgba(3, 76, 140, 0.24);
}

body {
    font-family: 'Roboto', Sans-Serif;
    background: #4ED9D9;
    display: flex;
    justify-content: center;
    align-items: center;
}   
`;

export default AccessStyles;
/* Login */



