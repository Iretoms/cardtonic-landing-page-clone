import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
    &.fixed {
        position: fixed;
    }
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}
`;

export default GlobalStyle