import * as enums from "../utils/enums/Contatos";

class Contato {
  nome: string;
  telefone: string;
  email: string;
  prioridade: enums.Prioridade;
  relacao: enums.Relacao;
  descricao: string;
  id: number;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    prioridade: enums.Prioridade,
    relacao: enums.Relacao,
    descricao: string,
    id: number
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.prioridade = prioridade;
    this.relacao = relacao;
    this.descricao = descricao;
    this.id = id;
  }
}

export default Contato;
