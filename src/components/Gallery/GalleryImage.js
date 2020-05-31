import React from 'react';
import styled from 'styled-components';

const GalleryImage = ({ src, alt }) => {
    return (
        <GalleryImageWrapper src={src}>
            <div className="image"></div>
        </GalleryImageWrapper>
    );
}


export default GalleryImage;

const GalleryImageWrapper = styled.article`
    overflow: hidden;
    min-height: 200px;
    width: 250px;
    max-width: 350px;
    margin: 0 2rem 2rem 0;
    flex-grow: 1;
    border-right: 10px solid ${({ theme }) => theme.color.primary};
    cursor: pointer;
    .image {
        background-image: ${({ src }) => `url(${src})`};
        min-height: 200px;
        background-size: cover;
        background-position: 50% 50%;
        transition: all .3s ease;
        &:hover {
            transform: scale(1.2);
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            max-width: 600px;
            min-height: 220px;
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            min-height: 200px;
        }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 600px;
        min-height: 220px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 0 2rem 0;
        min-height: 200px;
    }
`;
