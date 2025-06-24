import { MainContainer, Titulo } from "../../styles"
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Contato from "../../components/Contatos";

const ListaDeContatos = () => {

    const { itens } = useSelector((state: RootReducer) => state.contato);
    const { termo, criterio, valor } = useSelector(
      (state: RootReducer) => state.filtro
    );

    const filtraContatos = () => {
      let contatosFiltrados = itens;

      if (termo !== undefined) {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
        );

        if (criterio === "prioridade") {
            contatosFiltrados = contatosFiltrados.filter(
              (item) => item.prioridade === valor
            );
        } else if (criterio === "relacao") {
            contatosFiltrados = contatosFiltrados.filter(
              (item) => item.relacao === valor
            );
        }
        return contatosFiltrados;
      } else {
        return itens;
      }
    };

    const exibeResultadoFiltragem = (quantidade: number) => {
      let mensagem = '';

      const complementacao =
        termo !== undefined && termo.length > 0 ? `e "${termo}"` : "";

      if (criterio === "todas") {
        mensagem = `${quantidade} contato(s) encontrada(s) como: todas ${complementacao}`;
      } else {
        mensagem = `${quantidade} contato(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`;
      }

      return mensagem;
    };

    const contatos = filtraContatos();
    const mensagem = exibeResultadoFiltragem(contatos.length);

    return (
      <MainContainer>
        <Titulo as="p">{mensagem}</Titulo>
        <ul>
          {contatos.map((c) => (
            <li key={c.nome}>
              <Contato
                descricao={c.descricao}
                nome={c.nome}
                telefone={c.telefone}
                email={c.email}
                relacao={c.relacao}
                prioridade={c.prioridade}
                id={c.id}
              />
            </li>
          ))}
        </ul>
      </MainContainer>
    );
}

export default ListaDeContatos
