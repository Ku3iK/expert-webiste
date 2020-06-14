import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../themes/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../themes/GlobalStyle"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import Header from "../components/Header/Header"
import routes from "./paths"
import routesDe from "./pathsde"

const Layout = ({ children, location }) => {
  const { allDatoCmsContent } = useStaticQuery(
    graphql`
      query {
        allDatoCmsContent {
          nodes {
            headercontentde
            heaercontent
            footercontentde
            footercontent
          }
        }
      }
    `
  )
  const { headercontentde, heaercontent, footercontentde, footercontent } = allDatoCmsContent.nodes[0]
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        htmlAttributes={{ "lang": /^\/de.*$/.test(location.pathname) ? "de" : "pl" }}
      >
        <meta charSet="utf-8" />
        <title>EXPERT</title>
        <meta
          name="description"
          content="Expert to firma z tradycjami i jakością świadczonych usług, które cieszą się ogromnym uznaniem i zadowoleniem klientów. Zapraszamy do zapoznania się z ofertą. Od lat zajmuje się montażami stolarni otworowej, posiadamy w swojej ofercie szeroką gamę produktów, które z pewnością spełnią Państwa wymagania."
        />
        <meta
          name="keywords"
          content="Gorzów Wielkopolski, Gorzów, Drezdenko, Strzelce krajeńskie, Kłodawa, Barlinek, Lipiany, Myślibórz, Chojna, Mieszkowice, Dębno, Kostrzyn nad odrą, Krzeszyce, Deszczno, Bogdaniec, Witnica, Ośno lubuskie, Sulęcin, Międzyrzecz, Przytoczna, Tęczyce, Lubniewice, Pszczew, Słońsk, Świecko, Rzepin, Słubice, okna, drzwi, rolety, bramy garażowe, okna PCV, okna drewniane, okna aluminiowe, konigurator okien, drzwi pcv, monraż okien Gorzów Wielkopolski, montaż drzwi Gorzów Wielkopolski, montaż okien, drutex, Fart Produkt, montaż stolarki otworowej, stolarka otworowa"
        />
      </Helmet>
      <div id="pageWrapper">
        <GlobalStyle />
        {/^\/de.*$/.test(location.pathname) ? (
          <Nav routes={routesDe} isPolish={true} location={location} />
        ) : (
            <Nav routes={routes} location={location} />
          )}
        {location.pathname === "/" ? <Header>{heaercontent}</Header> : null}
        {location.pathname === "/de/" ? <Header>{headercontentde}</Header> : null}
        <main>{children}</main>
        {/^\/de.*$/.test(location.pathname)
          ? <Footer routes={routesDe} text={footercontentde} authors={"Die Website wurde entworfen und erstellt von:"} />
          : <Footer routes={routes} text={footercontent} authors={"Stronę zaprojektowali i wykonali"} />
        }
      </div>
    </ThemeProvider>
  )
}

export default Layout
