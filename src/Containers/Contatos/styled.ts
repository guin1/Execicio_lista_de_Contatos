import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: auto;
  width: 70%;
  background-color: #f7f1e3;
`

export const Label = styled.div`
  margin-bottom: 15px;
  margin-left: 15px;
`
export const Informacoes = styled.input`
  padding: 8px;
  border: none;
  transition: border-bottom 0.3s ease;
  border-bottom: 3px solid transparent;
  display: block;
  margin-bottom: 10px;

  &:hover {
    border-bottom: 3px solid #0984e3;
  }
`

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
export const Botoes = styled.button`
  margin-right: 15px;
  padding: 8px;
  cursor: pointer;
  color: #fff;
  border: none;
`
export const BotaoEditar = styled(Botoes)`
  background-color: #636e72;
`
export const BotaoRemover = styled(Botoes)`
  background-color: #d63031;
`
