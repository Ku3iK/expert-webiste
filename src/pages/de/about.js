import React from "react"
import styled from "styled-components"
import AboutUsElement from "../../components/AboutUsElement/AboutUsElement"
import H1 from "../../components/H1/H1"

import img1 from "../../assets/images/about1.svg"
import img2 from "../../assets/images/about2.svg"

import opinion1 from "../../assets/images/opinion/opinia1.jpg"
import opinion2 from "../../assets/images/opinion/opinia2.jpg"
import opinion3 from "../../assets/images/opinion/opinia3.jpg"
import opinion4 from "../../assets/images/opinion/opinia4.jpg"
import opinion5 from "../../assets/images/opinion/opinia5.jpg"
import opinion6 from "../../assets/images/opinion/opinia6.jpg"
import opinion7 from "../../assets/images/opinion/opinia7.jpg"
import Opinion from "../../components/Opinion/Opinion"

const NotFoundPage = () => {
  const aboutData = [
    {
      img: img1,
      content:
        "Expert ist ein Unternehmen mit Traditionen und Servicequalität, das große Anerkennung und Kundenzufriedenheit genießt. Wir laden Sie ein, sich mit dem Angebot vertraut zu machen.",
    },
    {
      img: img2,
      content:
        "Unsere Firma ist seit Expert Jahren beschäftigt mit der Installation von Fenstern, Wir bieten eine breite Palette von Produkten an, die sicherlich Ihren Anforderungen entsprechen.",
    },
  ]

  const opinionData = [
    opinion1,
    opinion2,
    opinion3,
    opinion4,
    opinion5,
    opinion6,
    opinion7,
  ]
  return (
    <Container>
      <H1>Wer wir sind?</H1>
      <AboutUsElement img={aboutData[0].img} content={aboutData[0].content} />
      <AboutUsElement
        img={aboutData[1].img}
        content={aboutData[1].content}
        isFirst
      />
      <H1>Unsere Meinungen</H1>
      <OpinionContainer>
        <Opinion opinionData={opinionData} />
      </OpinionContainer>
    </Container>
  )
}

export default NotFoundPage

const Container = styled.div`
  margin: 12rem 0 10rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 12rem 0 6rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 12rem 0 6rem;
  }
`

const OpinionContainer = styled.div`
  margin: 12rem 0 10rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 12rem 0 6rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 12rem 0 6rem;
  }
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      padding: 2rem 0;
      width: 100%;
      img {
        width: 70%;
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          width: 100%;
        }
      }
    }
  }
`
