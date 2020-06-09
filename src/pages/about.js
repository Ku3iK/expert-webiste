import React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'

import AboutUsElement from "../components/AboutUsElement/AboutUsElement"
import H1 from "../components/H1/H1"
import Opinion from "../components/Opinion/Opinion"

const About = ({ data }) => {
  const aboutData = [
    {
      img: data.allDatoCmsContent.nodes[0].whatarewedoingimage.url,
      content: data.allDatoCmsContent.nodes[0].whatarewedoing,
    },
    {
      img: data.allDatoCmsContent.nodes[0].whoweareimage.url,
      content: data.allDatoCmsContent.nodes[0].whoweare,
    },
  ]
  const opinionData = data.allDatoCmsOpinion.nodes;

  return (
    <Container>
      <H1>Kim jesteśmy?</H1>
      <AboutUsElement img={aboutData[0].img} content={aboutData[0].content} />
      <AboutUsElement
        img={aboutData[1].img}
        content={aboutData[1].content}
        isFirst
      />
      <H1>Opinie</H1>
      <OpinionContainer>
        <Opinion opinionData={opinionData} />
      </OpinionContainer>
    </Container>
  )
}

export const query = graphql`
  query aboutPage {
    allDatoCmsOpinion {
      nodes {
        id
        opinionimage {
          url
        }
      }
    }
    allDatoCmsContent {
      nodes {
        whoweare
        whatarewedoing
        whoweareimage {
          url
        }
        whatarewedoingimage {
          url
        }
      }
    }
  }
`

export default About

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
