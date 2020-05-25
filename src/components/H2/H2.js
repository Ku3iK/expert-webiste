import React from "react"
import styled from "styled-components"

export default styled.h2`
  display: inline-block;
  width: auto;
  color: ${({ theme }) => theme.color.text};
  padding: 5px 40px;
  font-size: ${({ theme }) => theme.font.l};
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.m};
    padding: 5px 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.xxs};
    padding: 5px 10px;
  }
`
