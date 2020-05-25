import React from "react"
import CarouselElement from "./CarouselElemnt"
import styled from "styled-components"
import H1 from "../H1/H1"
import pcvWindow from "../../../static/oknaPCV.png"
import woodenWindow from "../../../static/oknaDrewniane.png"
import aluminiumWindow from "../../../static/oknaAluminiowe.png"

const CarouselComponent = () => {
  return (
    <CarouselComponentWrapper>
      <H1>Okna, drzwi, bramy garażowe</H1>
      <div className="carousel">
        <CarouselElement title="Okna aluminiowe" photo={aluminiumWindow} />
        <CarouselElement
          isActive={true}
          title="Okna drewniane"
          photo={woodenWindow}
        />
        <CarouselElement title="Okna aluminiowe" photo={aluminiumWindow} />
        <div className="arrow nextArrow"></div>
        <div className="arrow previousArrow"></div>
      </div>
    </CarouselComponentWrapper>
  )
}

export default CarouselComponent

const CarouselComponentWrapper = styled.div`
  h1 {
    margin-bottom: 6rem;
    padding: 5px 10px;
  }
  div.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 3rem 6rem;
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
    div.active.true {
      position: relative;
      width: 400px;
      height: 400px;
      ::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 80%;
        background-color: ${({ theme }) => theme.color.primary};
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-left: -6rem;
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
          margin: 0;
          margin-left: -3rem;
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
        transform: translateY(-50%);
        margin-right: -6rem;
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
          margin-right: -3rem;
        }
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
        width: 300px;
        height: 300px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 200px;
        height: 200px;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 180px;
        height: 180px;
      }
    }
    div.active.false {
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        opacity: 50%;
      }
    }
  }
`
