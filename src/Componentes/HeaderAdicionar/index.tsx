import { Link } from 'react-router-dom'
import { HeaderAdicionar, NavegacaoAdcionar } from './styled'

const HeaderAdiconar = () => {
  return (
    <HeaderAdicionar>
      <h1>Adicione o contato</h1>
      <NavegacaoAdcionar>
        <Link to="/">Home</Link>
      </NavegacaoAdcionar>
    </HeaderAdicionar>
  )
}

export default HeaderAdiconar
