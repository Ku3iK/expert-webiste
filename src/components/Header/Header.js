import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import HeaderSub from './HeaderSub';
import Button from '../Button/Button';
import H2 from '../H2/H2';
import P1 from '../P1/P1';
import Logo from "../../assets/icons/logoBigWhite.inline.svg";
import HeaderImg from '../../../static/headerImage.jpg';

const Header = ({ children }) => {
    const data = useStaticQuery(graphql`
        query queryForHeroImage {
        file(name: {eq: "headerImage"}) {
            childImageSharp {
            fluid(maxWidth: 3080, quality: 100, duotone: { highlight: "#31302D", shadow: "#31302D", opacity: 40 }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            }
        }
        }
        `)
    return (
        <>
            <HeaderBaner>
                <div className="wrapper">
                    <Logo />
                    <P1>{children}</P1>
                </div>
                <Img objectFit="cover" objectPosition="50% 50%" fluid={data.file.childImageSharp.fluid} />
            </HeaderBaner>
            <HeaderSub>
                <H2>Sprawdź naszą ofertę</H2>
                <Button>Oferta</Button>
            </HeaderSub>
        </>
    );
}

export default Header;

const HeaderBaner = styled.header`
    background-image: url(${HeaderImg});
    background-position: center center;
    position: relative;
    overflow: hidden;
    margin-top: 5rem;
    .wrapper {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
        p {
            max-width: 600px;
            margin: 2rem 0 16vh;
        }
        svg {
           margin: 16vh 0 2rem; 
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            padding: 0 3rem;
            p {
                margin: 2rem 0 12vh;
                max-width: 500px;
            }
            svg {
                margin: 12vh 0 2rem;
                width: 300px; 
            }
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            p {
                margin: 2rem 0 8vh;
            }
            svg {
                margin: 8vh 0 2rem; 
                width: 250px; 
            }
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            p {
                margin: 1rem 0 8vh;
                line-height: 3rem;
            }
            svg {
                margin: 8vh 0 1rem; 
                width: 220px; 
            }
        }
    }
    .gatsby-image-wrapper {
        position: absolute !important;
        top: 50%;
        right: 0;
        width: 100%;
        transform: translateY(-50%);
        object-fit: cover;
        z-index: 0;
        @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
            height: 100%;
        }
    }
`;