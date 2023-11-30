import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Contato } from '../../store/Redurces/Contatos'
import { editarContato, removerContato } from '../../store/Redurces/Contatos'
import {
  ContainerBotoes,
  Card,
  Label,
  BotaoEditar,
  BotaoRemover,
  Informacoes
} from './styled'

const Contatos: React.FC = () => {
  const [modoEdicao, setModoEdicao] = useState(false)
  const [contatoEditado, setContatoEditado] = useState<Contato>({
    id: '',
    nome: '',
    email: '',
    telefone: ''
  })

  const dispatch = useDispatch()
  const contatos = useSelector((state: any) => state.contatos)

  const EditarContato = () => {
    setModoEdicao(true)
    const contatoParaEditar = contatos.find(
      (contato: Contato) => contato.id === contatos[0].id
    )
    setContatoEditado({ ...contatoParaEditar } as Contato)
  }

  const BotaoSalvar = () => {
    const action = editarContato(contatoEditado)
    if (action) {
      dispatch(action)
    }
    setModoEdicao(false)
  }

  const BotaoCancelar = () => {
    setModoEdicao(false)
  }
  const RemoverContato = () => {
    if (contatos && contatos.length > 0) {
      dispatch(removerContato(contatos[0].id))
      setModoEdicao(false)
    }
  }

  const ParaInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    campo: keyof Contato
  ) => {
    setContatoEditado((prevContato) => ({
      ...prevContato,
      [campo]: event.target.value
    }))
  }

  return (
    <Card>
      <>
        <Label>
          <span>
            Nome:{' '}
            {modoEdicao ? (
              <Informacoes
                type="text"
                value={contatoEditado.nome}
                onChange={(e) => ParaInput(e, 'nome')}
              />
            ) : (
              contatos[0].nome
            )}
          </span>
        </Label>
        <Label>
          <span>
            E-mail:{' '}
            {modoEdicao ? (
              <Informacoes
                type="text"
                value={contatoEditado.email}
                onChange={(e) => ParaInput(e, 'email')}
              />
            ) : (
              contatos[0].email
            )}
          </span>
        </Label>
        <Label>
          <span>
            Telefone:{' '}
            {modoEdicao ? (
              <Informacoes
                type="tel"
                value={contatoEditado.telefone}
                onChange={(e) => ParaInput(e, 'telefone')}
              />
            ) : (
              contatos[0].telefone
            )}
          </span>
        </Label>
        <ContainerBotoes>
          {modoEdicao ? (
            <>
              <BotaoEditar onClick={BotaoSalvar}>Salvar</BotaoEditar>
              <BotaoRemover onClick={BotaoCancelar}>Cancelar</BotaoRemover>
            </>
          ) : (
            <>
              <BotaoEditar onClick={EditarContato}>Editar</BotaoEditar>
              <BotaoRemover onClick={RemoverContato}>Remover</BotaoRemover>
            </>
          )}
        </ContainerBotoes>
      </>
    </Card>
  )
}

export default Contatos
