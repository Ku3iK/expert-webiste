import React from "react"
import styled from "styled-components"

export default styled.button`
  padding: .5rem 3rem;
  background-color: #fcaa30;
  border-bottom: 4px solid #030303;
  font-size: ${({ theme }) => theme.font.m};
  font-weight: ${({ theme }) => theme.font.bold};
  color: #fff;
  ::first-letter {
    text-transform: uppercase;
  }
  cursor: pointer;
`
