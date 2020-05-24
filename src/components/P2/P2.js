import React from "react"
import styled from "styled-components"

export default styled.p`
  font-size: ${({ theme }) => theme.font.xs};
  color: ${({ color }) => color};
  font-weight: ${({ theme }) => theme.font.thin};
  ::first-letter {
    text-transform: uppercase;
  }
`