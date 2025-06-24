import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { remover, editar } from "../../store/reducers/contatos";
import ContatoClass from "../../models/Contato";
import { Botao, BotaoSalvar } from "../../styles";

type Props = ContatoClass;

const Contato = ({
    descricao: descricaoOriginal,
    prioridade,
    relacao,
    nome,
    telefone,
    email,
    id,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal);
    }
  }, [descricaoOriginal]);

  function cancelarDescricao() {
    setEstaEditando(false);
    setDescricao(descricaoOriginal);
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
        ></input>
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="relacao" relacao={relacao}>
        {relacao}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
        readOnly={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    relacao,
                    nome,
                    telefone,
                    email,
                    id,
                  })
                );
                setEstaEditando(false);
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoSCancelar onClick={cancelarDescricao}>
              Cancelar
            </S.BotaoSCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Contato;
