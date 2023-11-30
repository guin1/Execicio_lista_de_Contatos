import { useSelector } from 'react-redux'
import Header from '../../Componentes/Header'
import ListaDeContatos from '../../Containers/ListaDeContatos'
import { ContatosState } from '../../store/Redurces/Contatos'

const Home = () => {
  const contatos = useSelector((state: ContatosState) => state.contatos)

  return (
    <>
      <Header />
      <ListaDeContatos contatos={contatos} />
    </>
  )
}

export default Home
