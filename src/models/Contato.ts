import * as enums from "../utils/enums/Contatos";

class Contato {
  nome: string;
  telefone: number;
  prioridade: enums.Prioridade;
  relacao: enums.Relacao;
  descricao: string;
  id: number;

  constructor(
    titulo: string,
    telefone: number,
    prioridade: enums.Prioridade,
    relacao: enums.Relacao,
    descricao: string,
    id: number
  ) {
    this.nome = titulo;
    this.telefone = telefone;
    this.prioridade = prioridade;
    this.relacao = relacao;
    this.descricao = descricao;
    this.id = id;
  }
}

export default Contato;
