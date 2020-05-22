import React from "react"
import styled from "styled-components"

export default styled.h2`
  display: inline-block;
  width: auto;
  color: ${props => props.color};
  padding: 5px 40px;
  font-size: 3.5rem;
  margin: 0 20px;
  text-transform: uppercase;
`
