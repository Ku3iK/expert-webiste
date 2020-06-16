import React from "react"
import styled from "styled-components"

const CarouselElement = ({ photo, title, isActive }) => {
  return (
    <CarouselElementWrapper className={isActive ? "active" : null}>
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
  padding: 1rem 3rem;
  width: 300px;
  height: 400px;
  img {
    width: 100%;
    padding: 0 2rem;
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
    width: 200px;
    height: 300px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    opacity: 50%;
    &.active {
      opacity: 100%;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    display: none;
    &.active {
      display: block;
      padding: 0;
    }
  }
  &.active {
    position: relative;
    width: 400px;
    margin: 2rem 10rem;
    h3 {
      font-size: ${({ theme }) => theme.font.m};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
      width: 300px;
      margin: 2rem 6rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      h3 {
        font-size: ${({ theme }) => theme.font.m};
      }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
      margin: 2rem 0;
      max-width: 320px;
    }
    ::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 80%;
      background-color: ${({ theme }) => theme.color.primary};
      left: 0;
      top: 50%;
      transform: translate(-6rem, -50%);
      @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
        transform: translate(-3rem, -50%);
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
      }
    }
    ::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 80%;
      background-color: ${({ theme }) => theme.color.primary};
      right: 0;
      top: 50%;
      transform: translate(6rem, -50%);
      @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
        transform: translate(3rem, -50%);
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
      }
    }
  }
`
