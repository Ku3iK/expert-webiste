import React from "react"
import styled from "styled-components"

const CarouselElement = ({ photo, title, isActive }) => {
  return (
    <CarouselElementWrapper className={`active ${isActive ? true : false}`}>
      <img src={photo} alt={title} />
      <h3>{title}</h3>
    </CarouselElementWrapper>
  )
}

export default CarouselElement

const CarouselElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  margin: 2rem 10rem 2rem 0;
  padding: 1rem 3rem;
  width: 300px;
  height: 300px;
  :nth-of-type(3) {
    margin: 2rem 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
      margin: 1rem 0;
    }
  }
  img {
    width: 100%;
  }
  h3 {
    color: ${({ theme }) => theme.color.secondary};
    font-size: ${({ theme }) => theme.font.m};
    text-transform: uppercase;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.font.xs};
      padding: 1rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
      font-size: ${({ theme }) => theme.font.xxs};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    margin: 1rem 5rem 1rem 0;
    width: 200px;
    height: 200px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 150px;
    height: 150px;
  }
`
