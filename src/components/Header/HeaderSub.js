import styled from "styled-components";


const HeaderSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 1.5rem;
  h2 {
    padding: 0 2rem 0 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 2rem;
    h2 {
      margin-bottom: 1rem;
      padding: 0;
      letter-spacing: -.5px;
    }
  }
`;

export default HeaderSub;
