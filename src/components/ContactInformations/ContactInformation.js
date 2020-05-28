import React from "react"
import styled from "styled-components"
import P2 from "../P2/P2"

const ContactInformation = ({ title, content }) => {
  return (
    <ContactInformationWrapper>
      <h3>{title}</h3>
      <P2>{content}</P2>
    </ContactInformationWrapper>
  )
}

export default ContactInformation

const ContactInformationWrapper = styled.div`
  margin: 2rem 0;
  padding: 0.5rem 2rem;
  border-left: 10px solid ${({ theme }) => theme.color.primary};
  h3 {
    font-size: ${({ theme }) => theme.font.m};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.bold};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.s};
    }
  }
`
