import React from "react";
import theme from "../themes/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../themes/GlobalStyle";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Header from '../components/Header/Header';
import routes from './paths'


const Layout = ({ children, location }) => {
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
                <Nav routes={routes} />
                {location.pathname === '/'
                    ? <Header />
                    : null
                }
                <main>
                    {children}
                </main>
                <Footer routes={routes} />
            </div>
        </ThemeProvider>
    )
}

export default Layout;