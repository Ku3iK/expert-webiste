import React from "react"
import styled from "styled-components"
import H1 from "../../components/H1/H1"
import Form from "../../components/Form/Form"
import P2 from "../../components/P2/P2"
import ContactInformation from "../../components/ContactInformations/ContactInformation"

const Contact = () => (
  <ContactPage>
    <H1>Unsere Kontaktdaten</H1>
    <div className="contactWrapper">
      <div>
        <P2>
          Sie können uns gern über das Bewerbungsformular , E -Mail oder per
          Telefon erreichen.
        </P2>
        <div>
          <ContactInformation title="telefon" content="534 534 542" />
          <ContactInformation
            title="e-mail"
            content="expert.szczenic@gmial.com"
          />
          <ContactInformation
            title="adresse"
            content="ul. blafsfsd 45 45-532 Szczecin"
          />
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  </ContactPage>
)

export default Contact

const ContactPage = styled.div`
  margin: 12rem 0 10rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 12rem 0 6rem ;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 12rem 0 6rem;
  }
  div.contactWrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 4rem 0 0 0;
    div {
      width: 100%;
    }
    > div:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p:first-child {
        margin-bottom: 2rem;
        width: 80%;
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          width: 100%;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
    }
    /* @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: flex;
      p:first-child {
        font-size: ${({ theme }) => theme.font.s};
      }
    } */
  }
`
