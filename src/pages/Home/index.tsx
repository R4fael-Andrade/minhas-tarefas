import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../styles/containers/BarraLateral'
import ListaDeTarefas from '../../styles/containers/ListadDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
