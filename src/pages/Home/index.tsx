import BotaoAdicionar from "../../components/BotaoAdicionar";
import BarraLateral from "../../containers/BarraLateral";
import ListaDeContatos from "../../containers/ListaContatos";

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
);

export default Home;
