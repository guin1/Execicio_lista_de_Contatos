import * as S from './styles'
import images from '../../images/livro-de-contato.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <S.Header>
      <div>
        <img src={images} alt="Livro de Contato" />
      </div>
      <h1>Lista de Contatos</h1>
      <S.Navegacao>
        <Link to="/">Home</Link>
      </S.Navegacao>
      <S.Navegacao>
        <Link to="/formulario">Adicione Contato</Link>
      </S.Navegacao>
    </S.Header>
  )
}

export default Header
