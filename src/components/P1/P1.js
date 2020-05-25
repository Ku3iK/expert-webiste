import styled from "styled-components";

const P1 = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.font.m};
  color: ${({ color, theme }) => color ? color : theme.color.white};
  ::first-letter {
    text-transform: uppercase;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.font.xs};
  }
`;

export default P1;
