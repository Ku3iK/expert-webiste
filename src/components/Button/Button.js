import styled from "styled-components"

export default styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom: 4px solid ${({ theme }) => theme.color.secondary};
  padding: 0.7rem 3rem;
  min-width: 200px;
  font-size: ${({ theme }) => theme.font.m};
  font-weight: ${({ theme }) => theme.font.bold};
  color: #fff;
  ::first-letter {
    text-transform: uppercase;
  }
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: auto;
  }
`
