import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Informacoes, Label } from '../../Containers/Contatos/styled'
import HeaderAdiconar from '../../Componentes/HeaderAdicionar'
import { BotaoContato, BotaoRemoverContato } from './styled'
import { adicionarContato } from '../../store/Redurces/Contatos'

const Formulario = () => {
  const [novoContato, setNovoContato] = useState({
    nome: '',
    email: '',
    telefone: ''
  })

  const dispatch = useDispatch()

  const paraoInput = (campo: string, valor: string) => {
    setNovoContato((prevContato) => ({
      ...prevContato,
      [campo]: valor
    }))
  }

  const AdicionarContato = () => {
    if (!novoContato.nome || !novoContato.email || !novoContato.telefone) {
      alert(
        'Por favor, preencha todos os campos antes de adicionar um novo contato.'
      )
      return
    }

    const novoContatoComID = {
      ...novoContato,
      id: Date.now()
    }

    dispatch(adicionarContato(novoContatoComID))
    setNovoContato({
      nome: '',
      email: '',
      telefone: ''
    })
    alert('Contato salvo com sucesso!')
  }

  const Cancelar = () => {
    alert('Contato cancelado!')
  }

  return (
    <>
      <HeaderAdiconar />
      <Card>
        <Label>
          Nome:
          <Informacoes
            type="text"
            value={novoContato.nome}
            onChange={(e) => paraoInput('nome', e.target.value)}
          />
        </Label>
        <Label>
          E-mail:
          <Informacoes
            type="text"
            value={novoContato.email}
            onChange={(e) => paraoInput('email', e.target.value)}
          />
        </Label>
        <Label>
          Telefone:
          <Informacoes
            type="tel"
            value={novoContato.telefone}
            onChange={(e) => paraoInput('telefone', e.target.value)}
          />
        </Label>
        <div>
          <BotaoContato onClick={AdicionarContato}>Adicionar</BotaoContato>
          <BotaoRemoverContato onClick={Cancelar}>Cancelar</BotaoRemoverContato>
        </div>
      </Card>
    </>
  )
}

export default Formulario
