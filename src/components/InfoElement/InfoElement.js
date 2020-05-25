import React from "react"
import styled from "styled-components"

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: ${({ theme }) => theme.font.m};
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 10px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  flex-grow: 2;
  margin: 20px 20px 20px 0;
  ::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.s};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.xxs};
    margin: 10px 0;
    width: 100%;
  }
`
