import { useNavigate } from "react-router-dom";
import { BotaoSalvar, Campo, MainContainer, Titulo } from "../../styles";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import * as enums from "../../utils/enums/Contatos";
import { cadastrar } from "../../store/reducers/contatos";
import { Form, Opcoes, Opcao } from "./styles";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL);
  const [relacao, setRelacao] = useState(enums.Relacao.FAMILIA);

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(
      cadastrar({
        nome,
        telefone,
        email,
        relacao,
        descricao,
        prioridade,
      })
    );
    navigate("/");
  };
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="Telefone"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição do contato"
        ></Campo>
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridadeItem) => (
            <Opcao key={prioridadeItem}>
              <input
                value={prioridadeItem}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridadeItem}
                defaultChecked={prioridadeItem === enums.Prioridade.NORMAL}
              />{" "}
              <label htmlFor={prioridadeItem}>{prioridadeItem}</label>
            </Opcao>
          ))}
        </Opcoes>
        <Opcoes>
          <p>Relação</p>
          {Object.values(enums.Relacao).map((relacaoItem) => (
            <Opcao key={relacaoItem}>
              <input
                value={relacaoItem}
                name="relacao"
                type="radio"
                onChange={(evento) =>
                  setRelacao(evento.target.value as enums.Relacao)
                }
                id={relacaoItem}
                defaultChecked={relacaoItem === enums.Relacao.FAMILIA}
              />{" "}
              <label htmlFor={relacaoItem}>{relacaoItem}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
