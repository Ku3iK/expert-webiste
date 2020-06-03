import React from "react"
import Carousel from "../components/Carousel/Carousel"
import Partners from "../components/Partners/Partners"
import AdditionalInformation from "../components/AdditionalInformation/AdditionalInformation"

const IndexPage = () => (
  <>
    <Carousel title="Okna, drzwi, rolety, bramy" />
    <Partners
      title="Nasi partnerzy"
      firstP="Drutex to wiodący producent okien w Europie. Jest to firma z potencjałem produkcyjnym, która jest w stanie wytwarzać 7000 okien dziennie."
      secondP="FART PRODUKT jest producentem nowoczesnych systemów osłonowych. Firma istnieje na rynku od 1994 roku i gwarantuje asortyment najwyższej jakości."
      buttonContent="Zobacz więcej"
    />
    <AdditionalInformation
      nip="NIP 599 323 98 60"
      regon="REGON 382 755 633"
      companyName="EXPERT Spółka z o.o."
      postCode="66-341 Santok"
      firstBankAccount="Konto 1: 95 1140 2004 0000 3702 7859 3271 PL"
      secondBankAccount="Konto 2: 96 1140 2004 0000 3112 0761 2502 EUR"
    />
  </>
)

export default IndexPage
