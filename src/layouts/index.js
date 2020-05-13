import React from "react";
import theme from '../themes/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../themes/GlobalStyle';
import { Helmet } from "react-helmet";


const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>EXPERT</title>
                <meta name="description" content="Jestem młodym twórcą stron internetowych, jeśli potrzbujesz małej strony dla twojej firmy o schludnym wyglądzie, możliwością edycji treści, która dostosowana jest do wszystkich urządzeń, to dobrze trafiłeś!" />
                <meta name="keywords" content="" />
            </Helmet>
            <div id="pageWrapper">
                <GlobalStyle />
                <main>
                    {children}
                </main>
            </div>
        </ThemeProvider>
    )
}

export default Layout;