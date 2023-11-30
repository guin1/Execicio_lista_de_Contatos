import React from 'react'
import Contatos from '../Contatos'
import { Erro } from './styled'

interface Contato {
  nome: string
  email: string
  telefone: string
}

interface ListaDeContatosProps {
  contatos: Contato[]
}

const ListaDeContatos: React.FC<ListaDeContatosProps> = ({ contatos }) => {
  if (contatos.length === 0) {
    return <Erro>Você não tem nenhum contato.</Erro>
  }

  return (
    <div>
      {contatos.map(() => (
        // eslint-disable-next-line react/jsx-key
        <Contatos />
      ))}
    </div>
  )
}

export default ListaDeContatos
