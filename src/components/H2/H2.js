import styled from "styled-components"

export default styled.h2`
  color: ${props => props.color};
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
