import React from "react"
import H2 from "../H2/H2"
import styled from "styled-components"
import Button from "../Button/Button"

const HeaderSubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const HeaderSub = () => {
  return (
    <HeaderSubWrapper>
      <H2>Sprawdź naszą ofertę</H2>
      <Button>Oferta</Button>
    </HeaderSubWrapper>
  )
}

export default HeaderSub
