import React from "react"
import styled from "styled-components"
import H2 from "../../components/H2/H2"

const NotFoundPage = () => (
  <ConfiguratorWrapper>
    <H2>Konfigurator w budowie</H2>
  </ConfiguratorWrapper>
)

export default NotFoundPage

const ConfiguratorWrapper = styled.div`
  margin: 12rem 0 10rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 12rem 0 6rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 12rem 0 6rem;
  }
`
