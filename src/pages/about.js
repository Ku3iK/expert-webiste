import React from "react"
import styled from "styled-components"
import AboutUsElement from "../components/AboutUsElement/AboutUsElement"
import img1 from "../assets/images/about1.svg"
import img2 from "../assets/images/about2.svg"
import H1 from "../components/H1/H1"

const NotFoundPage = () => {
  const dataElements = [
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
  return (
    <Container>
      <H1>Kim jesteśmy?</H1>
      <AboutUsElement
        img={dataElements[0].img}
        content={dataElements[0].content}
      />
      <AboutUsElement
        img={dataElements[1].img}
        content={dataElements[1].content}
        isFirst
      />
      <H1>Nasze opinie</H1>
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
