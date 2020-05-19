import React from "react"
import styled from "styled-components"

const Button = styled.button`
  width: 146px;
  height: 35px;
  background-color: #fcaa30;
  border-bottom: 4px solid #030303;
  color: #fff;
  ::first-letter {
    text-transform: uppercase;
  }
`

const ButtonComponent = props => {
  return <Button text={props.title}>{props.title}</Button>
}

export default ButtonComponent
