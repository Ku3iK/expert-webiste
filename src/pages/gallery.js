import React, { useEffect } from "react";
import styled from "styled-components";
import H1 from "../components/H1/H1";
import Gallery from "../components/Gallery/Gallery";

import img1 from '../assets/images/gallery/1.jpg'
import img3 from '../assets/images/gallery/3.jpg'
import img4 from '../assets/images/gallery/4.jpg'
import img5 from '../assets/images/gallery/5.jpg'
import img8 from '../assets/images/gallery/8.jpg'
import img9 from '../assets/images/gallery/9.jpg'
import img10 from '../assets/images/gallery/10.jpg'
import img11 from '../assets/images/gallery/11.jpg'
import img12 from '../assets/images/gallery/12.jpg'



const GalleryPage = () => {
	const images = [
		{
			img: img1,
			alt: "gdfg"
		},
		{
			img: img3,
			alt: "gdfg"
		},
		{
			img: img4,
			alt: "gdfg"
		},
		{
			img: img5,
			alt: "gdfg"
		},
		{
			img: img8,
			alt: "gdfg"
		},
		{
			img: img9,
			alt: "gdfg"
		},
		{
			img: img10,
			alt: "gdfg"
		},
		{
			img: img11,
			alt: "gdfg"
		},
		{
			img: img12,
			alt: "gdfg"
		},
	];
	return (
		<GalleryConainer>
			<H1>Galeria</H1>
			<Gallery images={images} />
		</GalleryConainer>
	);
};

export default GalleryPage;

const GalleryConainer = styled.section`
    margin: 12rem 0 10rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		margin: 12rem 0 6rem ;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin: 12rem 0 6rem;
	}
	h1 {
		margin-bottom: 6rem;
	}
`;