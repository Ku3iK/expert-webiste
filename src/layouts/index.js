import React from "react"
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
  const text = `Firma expert od lat zajmuje się montażami stolarki otworowej, a od 2017 roku również
  sprzedażą i doradztwem w tej dziedzinie. posiadamy w swojej ofercie szeroką gamę
  produktów, które z pewnością spełnią państwa wymagania. znajdziecie państwo u nas okna z
  pcv, aluminium oraz drewna, oczywiście nie brakuje w ofercie także rolet zewnętrznych czy
  żaluzji z napędami zarówno ręcznymi, jak i elektrycznymi, czy solarnymi.`;
  const authors = "Stronę zaprojektowali i wykonali";
  const authorsDe = "Die Website wurde entworfen und erstellt";
  const textDe = `Unsere Firma ist seit ….Jahren beschäftigt mit der Installation von Fenstern, Fassaden und Türen
  und ab 2017 auch mit Vertrieb und Beratung in diesem Bereich. Wir bieten eine breite Palette von
  Produkten an, die sicherlich Ihren Anforderungen entsprechen. Bei uns finden Sie Fenster aus PVC,
  Aluminium und Holz, natürlich gibt es auch Rollläden oder Raffstore mit manuellen, elektrischen
  oder Solarantrieben.`;
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
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
        <Nav routes={routes} />
        {/^\/de.*$/.test(location.pathname) ? (
          <Nav routes={routesDe} />
        ) : (
          <Nav routes={routes} />
        )}
        {location.pathname === "/" ? <Header /> : null}
        {location.pathname === "/de" ? <Header /> : null}
        <main>{children}</main>
        {/^\/de.*$/.test(location.pathname)
          ? <Footer routes={routesDe} text={textDe} authors={authorsDe} />
          : <Footer routes={routes} text={text} authors={authors} />
        }
      </div>
    </ThemeProvider>
  )
}

export default Layout
