import React from "react"
import styled from "styled-components"
import P2 from "../P2/P2"

const AboutUsElement = ({ img, content, isFirst }) => {
  return (
    <AboutUsWrapper img={img} isFirst={isFirst}>
      <div className="image"></div>
      <div>
        <P2>{content}</P2>
      </div>
    </AboutUsWrapper>
  )
}

export default AboutUsElement

const AboutUsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 15px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  margin: 10rem 0;
  div {
    display: flex;
    align-items: center;
    min-height: 250px;
    width: 52%;
    padding: 2rem 8rem;
    background-color: ${({ theme }) => theme.color.white};
    p {
      line-height: 4rem;
    }
  }
  div:first-of-type {
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 48%;
    order: ${({ isFirst }) => (isFirst ? 2 : -1)};
  }
  div.first {
    order: -1;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    div {
      width: 55%;
      min-height: 240px;
      padding: 2rem 2rem 2rem 3rem;
      p {
      }
    }
    div:first-of-type {
      order: ${({ isFirst }) => (isFirst ? 2 : -1)};
    }
    .image {
      width: 45%;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    div {
      padding: 3rem 3rem;
      width: 100%;
      p {
        letter-spacing: 1px;
      }
    }
    div:first-of-type {
      order: 2;
      width: 100%;
    }
    .image {
      width: 100%;
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin: 6rem 0;
    div {
      padding: 2rem 1.5rem;
      min-height: auto;
      p {
        font-size: ${({ theme }) => theme.font.xxs};
        line-height: 3rem;
        letter-spacing: -0.2px;
      }
    }
    .image {
      width: 100%;
      display: block;
      height: 180px;
    }
  }
`
