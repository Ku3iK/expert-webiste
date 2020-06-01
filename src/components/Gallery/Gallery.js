import React, { useState } from 'react';
import styled from "styled-components";
import GalleryImage from './GalleryImage';

const Gallery = ({ images }) => {
    const [isBrowserActive, setBrowserActivity] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleActivateBrowser = index => {
        setActiveImageIndex(index);
        setBrowserActivity(true);
    }
    const handleChangePhoto = (direction = true) => {
        if (direction) {
            if (activeImageIndex === images.length - 1) setActiveImageIndex(0)
            else setActiveImageIndex(activeImageIndex + 1)
        } else {
            if (activeImageIndex === 0) setActiveImageIndex(images.length - 1)
            else setActiveImageIndex(activeImageIndex - 1)
        }
    }
    return (
        <div>
            {images.map(({ img, alt }, index) => <GalleryImage key={index} src={img} index={index} handleActivateBrowser={handleActivateBrowser} alt={alt ? alt : "obrazek w galeri"} />)}
            {
                isBrowserActive
                    ? (
                        <ImageBrowser>
                            <img src={images[activeImageIndex].img} alt="" />
                            <div className="arrows left" onClick={() => handleChangePhoto(false)}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                            </div>
                            <div className="arrows right" onClick={() => handleChangePhoto()}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                            </div>
                            <div className="cross" onClick={() => setBrowserActivity(false)}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                            </div>
                            <p><a href="https://fontawesome.com/license">we used font awesome</a></p>
                        </ImageBrowser>
                    )
                    : null
            }
            {/* <div className="imageBrowser">
                <img src={images[activeImageIndex].img} alt="" />
            </div> */}
        </div>
    );
}

export default Gallery;

const ImageBrowser = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(20,20,20,.8);
    z-index: 50;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 60%;
        max-width: 73%;
    }
    .arrows {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 80px;
        background-color: rgba(20,20,20,.4);
        cursor: pointer;
        svg {
            height: 60px;
            margin: 0 auto;
            fill: white;
            color: white;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            background-color: transparent;
            width: 40px;
            svg {
                height: 60px;
            }
        }
    }
    .left {
        left: 0;
    }
    .right {
        right: 0;
    }
    .cross {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 100;
        width: 80px;
        height: 80px;
        cursor: pointer;
        svg {
            width: 50%;
            height: auto;
            margin: 0 auto;
            color: white;
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            height:40px;
            width: 40px;
            top: 1px;
            right: 1px;
            svg {
                width: 80%;
            }
        }
    }
    p {
        position: absolute;
        bottom: 0;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        color: rgba(20,20,20,.7);
    }
`;
