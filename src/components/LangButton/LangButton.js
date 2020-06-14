import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import makePathToRedirect from '../../utils/makePathToRedirect';

const LangButton = ({ isPolish, location }) => {
    console.log(location)
    const redirectPath = makePathToRedirect(location.pathname, isPolish);
    return (
        <LangButtonWrapper to={redirectPath}>
            <img src={isPolish ? '/polishflag.svg' : '/deutchflag.svg'} alt="" />
        </LangButtonWrapper>
    );
}

export default LangButton;

const LangButtonWrapper = styled(Link)`
    position: absolute;
    top: auto;
    bottom: -50px;
    right: 10px;
    height: auto;
    cursor: pointer;
`;