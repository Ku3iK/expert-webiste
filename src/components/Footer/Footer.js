import React from 'react';
import P2 from '../P2/P2';
import { Link } from "gatsby";
import styled from 'styled-components';
import Logo from "../../assets/icons/logoBig.inline.svg";
import FooterButton from './FooterButton';

const Footer = ({ routes }) => {
    const infoEl = [
        { text: '790 364 021', link: "tel:+790364021" },
        { text: 'Stare Polichno ul.Skwierzyńska 7', link: "https://www.google.com/maps/place/Skwierzy%C5%84ska+7,+66-431+Stare+Polichno/@52.7196416,15.4263333,17z/data=!3m1!4b1!4m5!3m4!1s0x4706e75b1a90b8b5:0xa35d5ebbcf6c468a!8m2!3d52.7196416!4d15.428522" },
        { text: 'expert.szczecin@gmial.com', link: "mailto: expert.szczecin@gmial.com" },
    ]
    return (
        <FooterWrapper>
            <div>
                <div className="footerHeader">
                    <Logo></Logo>
                    <p>© 2020 All rights reserved.</p>
                </div>
                <P2 className="description">Firma Expert od lat zajmuje się montażami stolarki otworowej, a od 2017 roku również sprzedażą i doradztwem w tej dziedzinie. Posiadamy w swojej ofercie szeroką gamę produktów, które z pewnością spełnią Państwa wymagania. Znajdziecie Państwo u nas okna z PCV, aluminium oraz drewna, oczywiście nie brakuje w ofercie także rolet zewnętrznych czy żaluzji z napędami zarówno ręcznymi, jak i elektrycznymi, czy solarnymi.</P2>
                <ul>
                    {routes.map(({ path, name }, index) => (
                        <li key={index}>
                            <Link to={path} activeClassName="active">{name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="infoWrapper">
                    {
                        infoEl.map(({ text, link }) => <a href={link} rel="noopener noreferrer" target="_blank" key={text}><FooterButton>{text}</FooterButton></a>)
                    }
                </div>
                <p className="authors" >Zaprojektowana i wykonana przez <span>Mikołaja Zienkowicza i Jakuba Kaczmarka</span></p>
            </div>
        </FooterWrapper>
    );
}

export default Footer;

const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.color.white};
    border-bottom: 15px solid  ${({ theme }) => theme.color.text};
    & > div {
        max-width: 1200px;
        margin: 0 auto;
        & > div.footerHeader {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 3rem 0 0 0;
            p {
                color: ${({ theme }) => theme.color.primary};
                font-size: ${({ theme }) => theme.font.xs};
            }
            svg {
                width: 230px;
            }
            @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                flex-direction: column;
                align-items: flex-start;
            }
        }
        & > p.authors {
            color: ${({ theme }) => theme.color.text};
            font-size: ${({ theme }) => theme.font.xs};
            padding: 3rem 0;
            font-weight: ${({ theme }) => theme.font.thin};
            & > span {
                color: ${({ theme }) => theme.color.primary};
            }
        }
        div.infoWrapper {
            display: flex;
            justify-content: space-between;
            padding: 3rem 0 0 0;
            & > a {
                flex-grow: 1;
                margin-right: 30px;
                text-align: center;
                &:last-child {
                    margin: 0;
                }
                @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
                    margin-right: 10px;
                }
                @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    margin-right: 0;
                    margin-bottom: 10px;
                }
            }
            @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                flex-direction: column;
            }
        }
        & > ul {
            display: flex;
            justify-content: space-between;
            padding: 3rem 0 0 0;
            @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                flex-wrap: wrap;
                /* align-last: center; */
            }
            li {
                a {
                    font-size: ${({ theme }) => theme.font.xs};
                    font-weight: ${({ theme }) => theme.font.medium};
                    &.active {
                        font-weight: ${({ theme }) => theme.font.bold};
                    }
                }
                @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    text-align: center;
                    /* margin-bottom: 20px; */
                    padding: 1rem 0rem;
                    padding-right: 2rem;
                    &:last-child {
                        padding-right: 0;
                    }
                }
                @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    flex-basis: 35%;
                    text-align: left;
                    &:last-child {
                        flex-basis: 100%;
                        text-align: center;
                    }
                }
            }
            @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                    display: none;
                }
        }
        p.description {
            padding: 3rem 0 0 0;
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            padding: 0 3rem;
        }
    }
    
`;