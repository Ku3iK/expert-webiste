import React from "react"
import styled from "styled-components"

const AboutUsElement = ({ img, content, isFirst }) => {
  return (
    <AboutUsWrapper img={img}>
      <div></div>
      <div className={`${isFirst ? "first" : null}`}>
        <p>{content}</p>
      </div>
    </AboutUsWrapper>
  )
}

export default AboutUsElement

const AboutUsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 20px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  margin: 10rem 0;
  div {
    display: flex;
    align-items: center;
    min-height: 300px;
    width: 60%;
    padding: 2rem 8rem;
    background-color: ${({ theme }) => theme.color.white};
    p {
      font-size: ${({ theme }) => theme.font.m};
    }
  }
  div:first-of-type {
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 40%;
  }
  div.first {
    order: -1;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    flex-direction: column;
    margin: 10rem auto;
    width: 60%;
    div {
      width: 100%;
      height: 300px;
      padding: 2rem 4rem;
      p {
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
          font-size: ${({ theme }) => theme.font.s};
        }
      }
    }
    div:last-of-type {
      order: -1;
    }
    div.first {
      order: 2;
    }
    div:first-of-type {
      width: 100%;
    }
    :nth-child(odd) {
      border-bottom: none;
      border-top: 20px solid ${({ theme }) => theme.color.secondary};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
    div {
      padding: 1rem 6rem;
      p {
        font-size: ${({ theme }) => theme.font.xs};
        letter-spacing: 1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    div {
      padding: 1rem;
    }
    div:first-of-type {
      background-size: contain;
    }
  }
`
