import React from "react"
import { graphql } from "gatsby"
import Carousel from "../components/Carousel/Carousel"
import Partners from "../components/Partners/Partners"
import AdditionalInformation from "../components/AdditionalInformation/AdditionalInformation"

const IndexPage = ({ data }) => {
  const {
    bankacc1,
    bankacc2,
    regon,
    postalcode,
    nip,
    fullcompanyname,
    city,
  } = data.allDatoCmsContent.edges[0].node
  const partners = data.allDatoCmsPartner.nodes
  return (
    <>
      <Carousel
        title="Okna, drzwi, rolety, bramy"
        elements={data.allDatoCmsSlider.nodes.map(
          ({ elementname, elementimage }) => {
            return { name: elementname, url: elementimage.url }
          }
        )}
      />
      <Partners
        title="Nasi partnerzy"
        partners={partners}
        buttonContent="zobacz więcej"
      />
      <AdditionalInformation
        title="Więcej informacji"
        nip={`NIP ${nip}`}
        regon={`REGON ${regon}`}
        companyName={fullcompanyname}
        postCode={`${postalcode} ${city}`}
        firstBankAccount={bankacc1}
        secondBankAccount={bankacc2}
      />
    </>
  )
}

export const query = graphql`
  query MainPage {
    allDatoCmsContent {
      edges {
        node {
          bankacc1
          bankacc2
          city
          regon
          postalcode
          nip
          fullcompanyname
        }
      }
    }
    allDatoCmsPartner {
      nodes {
        partnerdescriptionde
        partnerdescription
        parnerpagelink
        partnername
        partnerimage {
          url
        }
      }
    }
    allDatoCmsSlider {
      nodes {
        elementname
        elementimage {
          url
        }
      }
    }
  }
`

export default IndexPage
