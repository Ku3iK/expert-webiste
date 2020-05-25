import React from "react"
import styled from "styled-components"

export default styled.p`
  width: 100%;
  font-size: 2.2rem;
  color: ${props => props.color};
  ::first-letter {
    text-transform: uppercase;
  }
`
