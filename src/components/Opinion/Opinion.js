import React from "react"
import styled from "styled-components"

import OpinionElement from "./OpinionElement"

const Opinion = ({ opinionData }) => {
  return (
    <div>
      {opinionData.map(({ img }, index) => (
        <OpinionElement key={index} src={img} />
      ))}
    </div>
  )
}

export default Opinion
