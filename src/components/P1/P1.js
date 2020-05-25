import React from "react"
import styled from "styled-components"

export default styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.font.s};
  color: ${({ color }) => color};
  ::first-letter {
    text-transform: uppercase;
  }
`
