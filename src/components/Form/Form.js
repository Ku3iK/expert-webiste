import React from "react"
import styled from "styled-components"
import Button from "../Button/Button"

const Form = () => {
  return (
    <FormWrapper>
      <form name="contact" method="POST" data-netlify="true" action="/succes">
        <div>
          <h4>Tytuł</h4>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <h4>Mail</h4>
          <input type="mail" name="mail" id="mail" />
        </div>
        <div>
          <h4>Pytanie do nas</h4>
          <textarea name="content" id="content" resize="none"></textarea>
        </div>
        <div className="button">
          <Button>Wyślij</Button>
        </div>
      </form>
    </FormWrapper>
  )
}

export default Form

const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      position: relative;
      margin: 2rem 0;
      padding: 0.5rem;
      color: ${({ theme }) => theme.color.secondary};
      input,
      textarea {
        border: none;
        border-left: 10px solid ${({ theme }) => theme.color.primary};
        padding: 1rem 2rem;
        resize: none;
        overflow: visible;
        width: 100%;
        font-size: ${({ theme }) => theme.font.m};
        :focus {
          outline-color: ${({ theme }) => theme.color.primary};
        }
      }
      textarea {
        height: 300px;
      }
    }
    h4 {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25px, -15px);
      font-size: ${({ theme }) => theme.font.m};
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.font.s};
        transform: translate(25px, -13px);
      }
    }
    div.button {
      display: flex;
      justify-content: flex-end;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        justify-content: center;
      }
    }
  }
`
