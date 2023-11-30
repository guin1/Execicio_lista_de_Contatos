import styled from 'styled-components'

export const Header = styled.header`
  background-color: #182c61;
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
export const Navegacao = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 2px 5px;
  margin: 8px;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`
