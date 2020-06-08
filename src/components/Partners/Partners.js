import React from "react"
import styled from "styled-components"

import Partner from "./Partner"
import P2 from "../P2/P2"
import H1 from "../H1/H1"
import Button from "../Button/Button"
import img1 from "../../../static/durtexLogo.png"
import img2 from "../../../static/fartProductLogo.png"

const Partners = ({ title, partners, buttonContent, isDE }) => {
  return (
    <PratnersWrapper>
      <H1>{title}</H1>
      <div className="wrapper">
        {partners.map(({ partnerdescription, partnerdescriptionde, parnerpagelink }, index) => (
          <Partner key={index}>
            <P2>{isDE ? partnerdescriptionde : partnerdescription}</P2>
            <Button to={parnerpagelink}>{buttonContent}</Button>
          </Partner>
        ))}
      </div>
    </PratnersWrapper>
  )
}

export default Partners

const PratnersWrapper = styled.section`
  margin: 20rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 12rem 0;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
    & > * {
      margin-right: 4rem;
      &:last-child {
        margin: 0;
      }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      & > * {
        margin-bottom: 6rem;
        margin-right: 0;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
`
