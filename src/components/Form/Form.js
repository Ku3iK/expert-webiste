import React from "react"
import styled from "styled-components"
import Button from "../Button/Button"

const Form = ({ labels }) => {
  return (
    <FormWrapper>
      <form name="contact" method="POST" data-netlify="true" action="/succes">
        <div>
          <h4>{labels[0]}</h4>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <h4>{labels[1]}</h4>
          <input type="mail" name="mail" id="mail" />
        </div>
        <div>
          <h4>{labels[2]}</h4>
          <textarea name="content" id="content" resize="none"></textarea>
        </div>
        <div className="button">
          <Button type="submit">{labels[3]}</Button>
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
      margin: 1rem 0;
      /* padding: 0.5rem; */
      color: ${({ theme }) => theme.color.secondary};
      input,
      textarea {
        border: none;
        border-left: 10px solid ${({ theme }) => theme.color.primary};
        padding: 1.5rem 3rem;
        resize: none;
        overflow: visible;
        width: 100%;
        font-size: ${({ theme }) => theme.font.m};
        :focus {
          outline-color: ${({ theme }) => theme.color.primary};
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          padding: 1rem 2rem;
        }
      }
      textarea {
        height: 300px;
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          height: 200px;
        }
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
      /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        justify-content: center;
      } */
    }
  }
`
