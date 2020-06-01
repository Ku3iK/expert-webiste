import React from "react"
import styled from "styled-components"

const OpinionElement = ({ src }) => {
  return (
    <OpinionElementWrapper src={src}>
      <img src={src} alt="Opinia o firmie Expert z serwisu Oferteo" />
    </OpinionElementWrapper>
  )
}

export default OpinionElement

const OpinionElementWrapper = styled.div`
  padding: 2rem 5rem 2rem 0;
  width: 50%;
  img {
    width: 100%;
    border-right: 10px solid ${({ theme }) => theme.color.primary};
  }
`
