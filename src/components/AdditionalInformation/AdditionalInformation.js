import React from "react"
import styled from "styled-components"
import H1 from "../H1/H1"
import InfoElement from "./InfoElement"

const AdditionalInformation = ({
  title,
  nip,
  regon,
  companyName,
  postCode,
  firstBankAccount,
  secondBankAccount,
}) => (
  <AdditionalInformationWrapper>
    <H1>{title}</H1>
    <div className="wrapper">
      <InfoElement>{nip}</InfoElement>
      <InfoElement>{regon}</InfoElement>
      <InfoElement>{companyName}</InfoElement>
      <InfoElement>{postCode}</InfoElement>
      <InfoElement>{firstBankAccount}</InfoElement>
      <InfoElement>{secondBankAccount}</InfoElement>
    </div>
  </AdditionalInformationWrapper>
)

export default AdditionalInformation

const AdditionalInformationWrapper = styled.div`
  margin: 20rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 12rem 0;
  }
  h1 {
    margin-bottom: 6rem;
  }
  div.wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
