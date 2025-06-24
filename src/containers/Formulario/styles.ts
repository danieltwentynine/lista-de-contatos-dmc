import styled from "styled-components";

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  input, textarea {
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
  }

  textarea {
    resize: none;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
