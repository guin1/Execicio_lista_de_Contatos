import styled from 'styled-components'

export const HeaderAdicionar = styled.header`
  background-color: #27ae60;
  color: #fff;
  margin: 16px;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 32px;
    margin-left: 25px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 10px;
    }
  }
`
export const NavegacaoAdcionar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 2px 5px;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    margin: 8px;

    &:hover {
      text-decoration: underline;
    }
  }
`
