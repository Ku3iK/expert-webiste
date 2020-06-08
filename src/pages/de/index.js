import React from "react"
import { graphql } from 'gatsby'
import Carousel from "../../components/Carousel/Carousel"
import Partners from "../../components/Partners/Partners"
import AdditionalInformation from "../../components/AdditionalInformation/AdditionalInformation"

const IndexPage = ({ data }) => {
  const { bankacc1, bankacc2, regon, postalcode, nip, fullcompanyname, city } = data.allDatoCmsContent.edges[0].node;
  const partners = data.allDatoCmsPartner.nodes;
  console.log(partners)
  return (
    <>
      <Carousel title="Holzfenster, PVC-Fenster, Aluminiumfenster, Tore" />
      <Partners
        title="Unsere Partner"
        partners={partners}
        isDE
        buttonContent="Mehr sehen"
      />
      <AdditionalInformation
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
  query mainPageDE {
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
      }
    }
  }
`


export default IndexPage
