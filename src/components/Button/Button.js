import React from "react"
import styled from "styled-components"

export default styled.button`
  width: 146px;
  height: 35px;
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom: 4px solid ${({ theme }) => theme.color.secondary};
  color: #fff;
  ::first-letter {
    text-transform: uppercase;
  }
  cursor: pointer;
`
