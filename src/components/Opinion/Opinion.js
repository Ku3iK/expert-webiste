import React from "react"

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
