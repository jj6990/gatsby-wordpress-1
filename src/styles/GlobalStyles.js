import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
    --primary-color: #054E81;
    --secondary-color: #E84243;
    --black-color: #181918;
    --white-color: #EFEFEF;
    --gray-light-color: #F6F6F6;
    --gray-medium-color: #9D9D9C;
    }
    html, 
    body {
        font-size: 10px;
        overflow-x: hidden;
        width: 100%;
    }
    ul, 
    a {
        list-style: none;
        text-decoration: none;
        color: var(--black-color);
    }
    h3 {
    font-size: 32px;
    text-transform: uppercase;
    }
    p {
    font-size: 18px;
    }
    .container {
        max-width: 1440px;
        padding: 15px;
        margin: 1rem auto;
        width: 100%; 
        box-sizing: border-box;
    }
    a:visited {
        color: var(--black-color);
    }
`;

export default GlobalStyles;