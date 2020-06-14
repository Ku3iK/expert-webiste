import React from "react"
import { graphql } from 'gatsby'
import styled from "styled-components"

import AboutUsElement from "../../components/AboutUsElement/AboutUsElement"
import H1 from "../../components/H1/H1"
import Opinion from "../../components/Opinion/Opinion"

const About = ({ data }) => {
  const aboutData = [
    {
      img: data.allDatoCmsContent.nodes[0].whatarewedoingimage.url,
      content: data.allDatoCmsContent.nodes[0].whatarewedoingde,
    },
    {
      img: data.allDatoCmsContent.nodes[0].whoweareimage.url,
      content: data.allDatoCmsContent.nodes[0].whowearede,
    },
  ]

  const opinionData = data.allDatoCmsOpinion.nodes;
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

export const query = graphql`
  query aboutPageDE {
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
        whowearede
        whatarewedoingde
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

export default About;

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
