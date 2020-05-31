import React from 'react';
import GalleryImage from './GalleryImage';

const Gallery = ({ images }) => {
    return (
        <div>
            {images.map(({ img, alt }, index) => <GalleryImage key={index} src={img} alt={alt ? alt : "obrazek w galeri"} />)}
        </div>
    );
}

export default Gallery;