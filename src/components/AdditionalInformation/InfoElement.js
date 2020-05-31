import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: ${({ theme }) => theme.font.s};
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 8px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  flex-grow: 2;
  padding: 5px 15px;
  margin: 20px 20px 20px 0;
  ::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.xxs};
    margin: 10px 0;
    width: 100%;
  }
`
