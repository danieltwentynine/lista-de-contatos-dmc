import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { alterarFiltro } from "../../store/reducers/filtro";
import * as enums from "../../utils/enums/Contatos";
import { RootReducer } from "../../store";

export type Props = {
  legenda: string;
  criterio: "prioridade" | "relacao" | "todas";
  valor?: enums.Prioridade | enums.Relacao;
};

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch();
  const { filtro, contato } = useSelector((state: RootReducer) => state);

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio;
    const mesmoValor = filtro.valor === valor;

    return mesmoCriterio && mesmoValor;
  };

  const contarContatos = () => {
    if (criterio === "todas") return contato.itens.length;
    if (criterio === "prioridade") {
      return contato.itens.filter((item) => item.prioridade === valor).length;
    }
    if (criterio === "relacao") {
      return contato.itens.filter((item) => item.relacao === valor).length;
    }
  };

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor,
      })
    );
  };

  const ativo = verificaEstaAtivo();
  const contador = contarContatos();

  return (
    <div>
      <S.Card ativo={ativo} onClick={filtrar}>
        <S.Contador>{contador}</S.Contador>
        <S.Label>{legenda}</S.Label>
      </S.Card>
    </div>
  );
};

export default FiltroCard;
