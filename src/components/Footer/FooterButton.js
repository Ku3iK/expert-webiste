import styled from "styled-components"

export default styled.label`
  display: block;
  background-color: #efefef;
  color: #31302d;
  font-size: ${({ theme }) => theme.font.xs};
  padding: 1rem 3rem;
  cursor: pointer;
  ::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    font-size: ${({ theme }) => theme.font.xs};
    padding: .8rem 1.2rem;    
  }
`
