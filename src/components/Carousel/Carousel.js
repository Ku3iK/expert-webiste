import React, { useState } from "react"
import CarouselElement from "./CarouselElemnt"
import styled from "styled-components"
import H1 from "../H1/H1"
import woodenWindow from "../../../static/oknaDrewniane.png"
import aluminiumWindow from "../../../static/oknaAluminiowe.png"

const Carousel = ({ title, elements }) => {
  const [activeElementsIndex, setActiveElementsIndex] = useState([0, 1, 2])
  const handleSwitchElement = direction => {
    if (direction)
      setActiveElementsIndex(
        activeElementsIndex.map(el => (el === elements.length - 1 ? 0 : el + 1))
      )
    else
      setActiveElementsIndex(
        activeElementsIndex.map(el => (el === 0 ? elements.length - 1 : el - 1))
      )
  }

  return (
    <CarouselWrapper>
      <H1>{title}</H1>
      <div className="carousel">
        <CarouselElement
          title={elements[activeElementsIndex[0]].name}
          photo={elements[activeElementsIndex[0]].url}
        />
        <CarouselElement
          isActive
          title={elements[activeElementsIndex[1]].name}
          photo={elements[activeElementsIndex[1]].url}
        />
        <CarouselElement
          title={elements[activeElementsIndex[2]].name}
          photo={elements[activeElementsIndex[2]].url}
        />
        <div
          className="arrow nextArrow"
          onClick={() => handleSwitchElement(true)}
        ></div>
        <div
          className="arrow previousArrow"
          onClick={() => handleSwitchElement(false)}
        ></div>
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
    margin-top: 4rem;
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
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        transform: rotate(-45deg) translate(1rem, -50%);
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
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        transform: rotate(45deg) translate(-1rem, -50%);
      }
    }
  }
`
