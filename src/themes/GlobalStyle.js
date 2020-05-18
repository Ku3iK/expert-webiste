import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }
    * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.font.name};
    }
    #pageWrapper {
        overflow: hidden;
    }
    html {
        font-size: 62.5%;
    }
    ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        font-family: ${({ theme }) => theme.font.name};
        background-color: transparent;
        border: none;
    }
`;

export default GlobalStyle;