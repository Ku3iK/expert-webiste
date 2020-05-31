import React, { useEffect } from 'react';
import Macy from "macy";

const Gallery = ({ images }) => {
    useEffect(() => {
        // eslint-disable-next-line
        const macyGallery = Macy({
            container: '.galleryContainer',
            trueOrder: false,
            waitForImages: false,
            margin: 15,
            columns: 3,
            breakAt: {
                900: 2,
                500: 1
            }
        });
    }, [])
    return (
        <div className="galleryContainer">
            {images.map(({ img, alt }, index) => <img key={index} src={img} alt={alt ? alt : "obrazek w galeri"} />)})}
        </div>
    );
}

export default Gallery;