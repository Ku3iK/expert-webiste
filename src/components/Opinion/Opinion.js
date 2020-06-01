import React from "react"
import styled from "styled-components"

import OpinionElement from "./OpinionElement"

const Opinion = ({ opinionData }) => {
  return (
    <div>
      {opinionData.map((el, index) => (
        <OpinionElement key={index} src={el} />
      ))}
    </div>
  )
}

export default Opinion
