export type Contato = {
  id: number | string
  nome: string
  email: string
  telefone: string
}

export type ContatosState = {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: []
}

export type ContatosAction =
  | { type: 'EDITAR_CONTATO'; payload: Contato }
  | { type: 'REMOVER_CONTATO'; payload: number }
  | { type: 'ADICIONAR_CONTATO'; payload: Contato }

export const editarContato = (contato: Contato): ContatosAction => ({
  type: 'EDITAR_CONTATO',
  payload: contato
})

export const removerContato = (id: number): ContatosAction => ({
  type: 'REMOVER_CONTATO',
  payload: id
})

export const adicionarContato = (novoContato: Contato): ContatosAction => ({
  type: 'ADICIONAR_CONTATO',
  payload: novoContato
})

export const contatosReducer = (
  state: ContatosState = initialState,
  action: ContatosAction
): ContatosState => {
  switch (action.type) {
    case 'EDITAR_CONTATO':
      return {
        ...state,
        contatos: state.contatos.map((contato) =>
          contato.id === action.payload.id ? action.payload : contato
        )
      }
    case 'REMOVER_CONTATO':
      return {
        ...state,
        contatos: state.contatos.filter(
          (contato) => contato.id !== action.payload
        )
      }
    case 'ADICIONAR_CONTATO':
      return {
        ...state,
        contatos: [...state.contatos, action.payload]
      }
    default:
      return state
  }
}

export default contatosReducer
