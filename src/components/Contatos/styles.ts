import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import * as enums from "../../utils/enums/Contatos";
import { Botao } from "../../styles";

type TagProps = {
  prioridade?: enums.Prioridade;
  relacao?: enums.Relacao;
  parametro: "prioridade" | "relacao";
};

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === "prioridade") {
    if (props.prioridade === enums.Prioridade.FAVORITO) return variaveis.amarelo;
    if (props.prioridade === enums.Prioridade.NORMAL) return variaveis.cinza;
  } else if (props.parametro === "relacao") {
    if (props.relacao === enums.Relacao.FAMILIA)
        return variaveis.vermelho;
    if (props.relacao === enums.Relacao.AMIGOS)
        return variaveis.vermelho;
    if (props.relacao === enums.Relacao.TRABALHO) 
        return variaveis.vermelho;
    if (props.relacao === enums.Relacao.OUTRO) 
        return variaveis.cinza;
  }
  return variaveis.cinza;
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 32px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const BotaoSCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`;

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`;

export const InfoContato = styled.div`
  margin: 16px 0;
  
  p {
    margin: 4px 0;
    font-size: 14px;
    color: #666;
  }
  
  strong {
    color: #333;
  }
`;
