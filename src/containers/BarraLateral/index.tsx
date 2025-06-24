import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { alterarTermo } from "../../store/reducers/filtro";
import * as enums from "../../utils/enums/Contatos";
import { Botao, Campo } from "../../styles";
import { useNavigate } from "react-router-dom";
import FiltroCard from "../../components/FiltroCard";

type Props = {
  mostrarFiltros: boolean;
};

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard criterio="todas" legenda="Todas" />
              <FiltroCard
                valor={enums.Prioridade.FAVORITO}
                criterio="prioridade"
                legenda="Favoritos"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="Normal"
              />
              <FiltroCard
                valor={enums.Relacao.FAMILIA}
                criterio="relacao"
                legenda="Familia"
              />
              <FiltroCard
                valor={enums.Relacao.AMIGOS}
                criterio="relacao"
                legenda="Amigos"
              />
              <FiltroCard
                valor={enums.Relacao.TRABALHO}
                criterio="relacao"
                legenda="Trabalho"
              />
              <FiltroCard
                valor={enums.Relacao.OUTRO}
                criterio="relacao"
                legenda="Outro"
              />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate("/")}>Voltar a lista de contatos</Botao>
        )}
      </div>
    </S.Aside>
  );
};

export default BarraLateral;
