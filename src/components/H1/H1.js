import React from "react"
import styled from "styled-components"

export default styled.h1`
  display: inline-block;
  height: 40px;
  width: auto;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 4px solid #fcaa30;
  color: ${({ theme }) => theme.color.text};
  padding: 5px 40px;
  font-size: ${({ theme }) => theme.font.l};
  ::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.m};
    padding: 5px 30px;
    height: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.xxs};
    padding: 5px 15px;
    height: 25px;
  }
`
