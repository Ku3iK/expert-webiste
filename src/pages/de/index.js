import React from "react"
import Carousel from "../../components/Carousel/Carousel"
import Partners from "../../components/Partners/Partners"
import AdditionalInformation from "../../components/AdditionalInformation/AdditionalInformation"

const IndexPage = () => (
  <>
    <Carousel title="Holzfenster, PVC-Fenster, Aluminiumfenster, Tore" />
    <Partners
      title="Unsere Partner"
      firstP="Drutex ist ein von den führender Fensterhersteller in Europa. Es ist ein Unternehmen mit Produktionspotential, das 7.000 Fenster pro Tag produzieren kann."
      secondP="Fart produkt ist Hersteller moderner Sonnenschutz Systeme . Das Unternehmen ist seit 1994 auf dem Markt und garantiert hochwertigen Qualität seiner Produkte."
      buttonContent="Mehr sehen"
    />
    <AdditionalInformation
      nip="NIP 599 323 98 60"
      regon="REGON 382 755 633"
      companyName="EXPERT Unternehmen z o.o."
      postCode="66-341 Santok"
      firstBankAccount="Konto 1: 95 1140 2004 0000 3702 7859 3271 PL"
      secondBankAccount="Konto 2: 96 1140 2004 0000 3112 0761 2502 EUR"
    />
  </>
)

export default IndexPage
