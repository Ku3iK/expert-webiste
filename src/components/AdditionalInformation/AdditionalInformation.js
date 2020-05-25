import React from "react"
import styled from "styled-components"
import H1 from "../H1/H1"
import InfoElement from "../InfoElement/InfoElement"

const AdditionalInformation = () => (
  <AdditionalInformationWrapper>
    <H1>Dodatkowe informacje</H1>
    <div className="wrapper">
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

const AdditionalInformationWrapper = styled.div`
  margin: 10rem 0;
  width: 100%;
  h1 {
    margin-bottom: 6rem;
    padding: 5px 10px;
  }
  div.wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
