import { createGlobalStyle } from "styled-components"

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
        background-color: ${({ theme }) => theme.color.background};
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
    main {
        max-width: 1200px;
        margin: 0 auto;
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            padding: 0 2rem;
        }
    }
    textarea, input{
        font-family: ${({ theme }) => theme.font.name};
    }
    
`

export default GlobalStyle
