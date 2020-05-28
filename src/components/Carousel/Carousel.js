import React, { useState } from "react"
import CarouselElement from "./CarouselElemnt"
import styled from "styled-components"
import H1 from "../H1/H1"
import pcvWindow from "../../../static/oknaPCV.png"
import woodenWindow from "../../../static/oknaDrewniane.png"
import aluminiumWindow from "../../../static/oknaAluminiowe.png"

const Carousel = () => {
  const [activeElementsIndex, setActiveElementsIndex] = useState([0, 1, 2])
  const images = [
    {
      photo: woodenWindow,
      title: "Okna 1",
    },
    {
      photo: aluminiumWindow,
      title: "Okna 2",
    },
    {
      photo: woodenWindow,
      title: "Okna 3",
    },
    {
      photo: aluminiumWindow,
      title: "Okna 4",
    },
    {
      photo: woodenWindow,
      title: "Okna 5",
    },
    {
      photo: aluminiumWindow,
      title: "Okna 6",
    },
  ]
  const handleSwitchElement = direction => {
    if (direction)
      setActiveElementsIndex(
        activeElementsIndex.map(el => (el === images.length - 1 ? 0 : el + 1))
      )
    else
      setActiveElementsIndex(
        activeElementsIndex.map(el => (el === 0 ? images.length - 1 : el - 1))
      )
  }

  return (
    <CarouselWrapper>
      <H1>Okna, drzwi, bramy</H1>
      <div className="carousel">
        <CarouselElement
          title={images[activeElementsIndex[0]].title}
          photo={images[activeElementsIndex[0]].photo}
        />
        <CarouselElement
          isActive
          title={images[activeElementsIndex[1]].title}
          photo={images[activeElementsIndex[1]].photo}
        />
        <CarouselElement
          title={images[activeElementsIndex[2]].title}
          photo={images[activeElementsIndex[2]].photo}
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
        transform: rotate(-45deg) translate(2rem, 0%);
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
        transform: rotate(45deg) translate(-2rem, 0%);
      }
    }
  }
`
