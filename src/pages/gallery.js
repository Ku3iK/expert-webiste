import React from "react";
import { graphql } from 'gatsby'
import styled from "styled-components";

import H1 from "../components/H1/H1";
import Gallery from "../components/Gallery/Gallery";

const GalleryPage = ({ data }) => {
	return (
		<GalleryConainer>
			<H1>Galeria</H1>
			<Gallery images={data.allDatoCmsGallery.nodes} />
		</GalleryConainer>
	);
};

export const query = graphql`
  query galleryPage {
    allDatoCmsGallery {
		nodes {
		  image {
			url
		  }
		}
	  }
  }
`

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
	div {
		display: flex;
		flex-wrap: wrap;
	}
`;
