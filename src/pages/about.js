import React from "react"
import styled from "styled-components"
import AboutUsElement from "../components/AboutUsElement/AboutUsElement"
import H1 from "../components/H1/H1"

import img1 from "../assets/images/about1.svg"
import img2 from "../assets/images/about2.svg"

import opinion1 from "../assets/images/opinion/opinia1.png"
import opinion2 from "../assets/images/opinion/opinia2.png"
import opinion3 from "../assets/images/opinion/opinia3.png"
import opinion4 from "../assets/images/opinion/opinia4.png"
import opinion5 from "../assets/images/opinion/opinia5.png"
import opinion6 from "../assets/images/opinion/opinia6.png"
import opinion7 from "../assets/images/opinion/opinia7.png"
import Opinion from "../components/Opinion/Opinion"

const NotFoundPage = () => {
  const aboutData = [
    {
      img: img1,
      content:
        "Expert to firma z tradycjami i jakością świadczonych usług, które cieszą się ogromnym uznaniem i zadowoleniem klientów. Zapraszamy do zapoznania się z ofertą.",
    },
    {
      img: img2,
      content:
        "Firma Expert od lat zajmuje się montażami stolarni otworowej, posiadamy w swojej ofercie szeroką gamę produktów, które z pewnością spełnią Państwa wymagania.",
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
      <H1>Kim jesteśmy?</H1>
      <AboutUsElement img={aboutData[0].img} content={aboutData[0].content} />
      <AboutUsElement
        img={aboutData[1].img}
        content={aboutData[1].content}
        isFirst
      />
      {/* <H1>Nasze opinie</H1>
      <OpinionContainer>
        <Opinion opinionData={opinionData} />
      </OpinionContainer> */}
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
