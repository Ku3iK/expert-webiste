import React from 'react';
import styled from 'styled-components';

const Partner = ({ file, children }) => {
    return (
        <PartnerWarpper>
            <img src={file ? file : null} alt="dfsd" />
            {children}
        </PartnerWarpper>
    );
}

export default Partner;

const PartnerWarpper = styled.article`
    max-width: 450px;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 100%;
    }
    * {
        margin: 1rem 0;
    }
    img {
        height: 90px;
        width: auto;
        align-self: flex-start;
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            height: auto;
            width: 100%;
        }
    }
    button {
        align-self: flex-end;
    }
`;

