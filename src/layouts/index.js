import React from "react";
import theme from "../themes/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../themes/GlobalStyle";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";


const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>EXPERT</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Helmet>
            <div id="pageWrapper">
                <GlobalStyle />
                <Nav />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </ThemeProvider>
    )
}

export default Layout;