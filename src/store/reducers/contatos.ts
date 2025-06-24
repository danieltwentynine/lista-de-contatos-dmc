import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/Contatos";
import Contato from "../../models/Contato";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      nome: "Daniel Cardoso",
      telefone: "123456679",
      email: "daniel@email.com",
      descricao: "irmão mais velho da familia Cardoso",
      prioridade: enums.Prioridade.FAVORITO,
      relacao: enums.Relacao.FAMILIA,
      id: 1,
    },
    {
      nome: "Sarah Cardoso",
      telefone: "123456479",
      email: "sarah@email.com",
      descricao: "irmã do meio da familia Cardoso",
      prioridade: enums.Prioridade.FAVORITO,
      relacao: enums.Relacao.FAMILIA,
      id: 2,
    },
    {
      nome: "Andre Cardoso",
      telefone: "123556679",
      email: "andre@email.com",
      descricao: "irmão do meio da familia Cardoso",
      prioridade: enums.Prioridade.FAVORITO,
      relacao: enums.Relacao.FAMILIA,
      id: 3,
    },
    {
      nome: "Giovanni Cardoso",
      telefone: "126456679",
      email: "giovanni@email.com",
      descricao: "irmão mais novo da familia Cardoso",
      prioridade: enums.Prioridade.FAVORITO,
      relacao: enums.Relacao.FAMILIA,
      id: 4,
    },
    {
      nome: "Jackson Marques",
      telefone: "126445679",
      email: "jackson@email.com",
      descricao: "Chefe de trabalho do Daniel",
      prioridade: enums.Prioridade.NORMAL,
      relacao: enums.Relacao.TRABALHO,
      id: 5,
    },
  ],
};

const tarefasSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contatos: { id: number }) => contatos.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.telefone === action.payload.telefone
      );

      if (contatoJaExiste) {
        alert("Já está cadastrado esse número. Tente outro!");
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.itens.push(contatoNovo);
      }
    }
  },
});

export const { remover, editar, cadastrar } = tarefasSlice.actions;
export default tarefasSlice.reducer;
