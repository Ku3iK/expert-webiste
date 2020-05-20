import React from "react"
import styled from "styled-components"
import H1 from "../H1/H1"
import InfoElement from "../InfoElement/InfoElement"

const AdditionalInformationWrapper = styled.div`
  width: 60%;
  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const AdditionalInformation = () => (
  <AdditionalInformationWrapper>
    <H1>Dodatkowe informacje</H1>
    <div>
      <InfoElement>NIP 599 323 89 60</InfoElement>
      <InfoElement>REGON 382 755 633</InfoElement>
      <InfoElement>EXPERT Spółka z o.o.</InfoElement>
      <InfoElement>66-341 Santok</InfoElement>
      <InfoElement>Konto 2: 95 1140 2004 0000 3702 7859 3271 PL</InfoElement>
      <InfoElement>Konto 2: 96 1140 2004 0000 3112 0761 2502 EUR</InfoElement>
    </div>
  </AdditionalInformationWrapper>
)

export default AdditionalInformation

//   height: 60px;
//   padding: 5px 15px;
//   font-size: 2.2rem;
//   background-color: #fff;
//   border-bottom: 10px solid #31302d;
//   color: #31302d;
//   ::first-letter {
//     text-transform: uppercase;
//   }
