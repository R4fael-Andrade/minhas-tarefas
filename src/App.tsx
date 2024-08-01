import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import BarraLateral from './styles/containers/BarraLateral'
import ListaDeTarefas from './styles/containers/ListadDeTarefas'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
