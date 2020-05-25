import React from "react"
import CarouselElement from "./CarouselElemnt"
import styled from "styled-components"
import H1 from "../H1/H1"
import pcvWindow from "../../../static/oknaPCV.png"
import woodenWindow from "../../../static/oknaDrewniane.png"
import aluminiumWindow from "../../../static/oknaAluminiowe.png"

const Carousel = () => {
  return (
    <CarouselWrapper>
      <H1>Okna, drzwi, bramy</H1>
      <div className="carousel">
        <CarouselElement title="Okna aluminiowe" photo={aluminiumWindow} />
        <CarouselElement
          isActive
          title="Okna drewniane"
          photo={woodenWindow}
        />
        <CarouselElement title="Okna aluminiowe" photo={aluminiumWindow} />
        <div className="arrow nextArrow"></div>
        <div className="arrow previousArrow"></div>
      </div>
    </CarouselWrapper>
  )
}

export default Carousel

const CarouselWrapper = styled.div`
  margin: 20rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 16rem 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 10rem 0 12rem;
  }
  h1 {
    margin-bottom: 3rem;
  }
  div.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    div.arrow {
      position: absolute;
      border: solid ${({ theme }) => theme.color.secondary};
      display: inline-block;
      padding: 35px;
      cursor: pointer;
      @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
        padding: 25px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 15px;
      }
    }
    div.nextArrow {
      right: 0;
      top: 50%;
      border-width: 0 8px 8px 0;
      transform: rotate(-45deg) translate(0%, -50%);
      @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
        transform: rotate(-45deg) translateY(0%, 0%);
      }
    }
    div.previousArrow {
      left: 0;
      top: 50%;
      border-width: 0 0 8px 8px;
      transform: rotate(45deg) translate(0%, -60%);
      @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
        transform: rotate(45deg) translate(0%, -50%);
      }
    }
  }
`
