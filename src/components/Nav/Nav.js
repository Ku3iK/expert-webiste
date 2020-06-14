import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"
import Logo from "../../assets/icons/logoSmall.inline.svg";
import LangButton from '../LangButton/LangButton';

const Nav = ({ routes, isPolish, location }) => {
    const [isNavVisible, setNavVisibility] = useState(false);
    return (
        <Container isNavVisible={isNavVisible}>
            <Link to="/"><Logo /></Link>
            <ul>
                {routes.map(({ path, name }, index) => (
                    <li key={index}>
                        <Link to={path} activeClassName="active" onClick={() => setNavVisibility(false)}>{name}</Link>
                    </li>
                ))}
            </ul>
            <div className="burger" onClick={() => setNavVisibility(!isNavVisible)} role="button" tabIndex={0}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <LangButton isPolish={isPolish ? isPolish : null} location={location} />
        </Container>
    );
}

export default Nav;

const Container = styled.nav`
    background-color: ${({ theme }) => theme.color.white};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 5px solid ${({ theme }) => theme.color.primary};
    padding: 0 30px;
    /* position: relative; */
    z-index: 10;
    & > a{
        display: flex;
        svg {
            height: auto;
            width: 110px;
            padding: 10px 20px;
        }
    }
    ul {
        display: flex;
        li {
            padding: 18px;
            a {
                font-weight: ${({ theme }) => theme.font.medium};
                &.active {
                    font-weight: ${({ theme }) => theme.font.bold};
                }
            }
        }
    }
    .burger {
        display: none;
        opacity: 0;
        position: relative;
        width: 50px;
        flex-direction: column;
        justify-content: space-between;
        height: 30px;
        z-index: 100;
        cursor: pointer;
        & div {
            height: 5px;
            background-color: ${({ theme }) => theme.color.primary};
            width: 100%;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        ul {
            position: fixed;
            display: ${({ isNavVisible }) => isNavVisible ? 'block' : 'none'};
            top: 0;
            right: 0;
            background-color: ${({ theme }) => theme.color.white};
            flex-direction: column;
            width: 100%;
            max-width: 450px;
            height: 100vh;
            padding: 70px 0;
            z-index: 10000;
            border-right: 5px solid ${({ theme }) => theme.color.primary}; 
            li {
                text-align: center;
            }
        }
        .burger {
            display: flex;
            opacity: 1;
            z-index: 10002
        }
        & > a{
            position: relative;
            z-index: 10001;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 15px;
        & > a{
            svg {
                height: auto;
                width: 70px;
                padding: 10px 0;
            }
        }
    }
`;

