import styled, { createGlobalStyle} from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
    * {
        text-decoration: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body {
      background-color: ${variaveis.fundoPagina};
    }
`

export default EstiloGlobal

export const Container = styled.div`
    display: grid;
    grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`;

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #66666;
  border-color: #66666;
  width: 100%;
`;

export const Botao = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`;