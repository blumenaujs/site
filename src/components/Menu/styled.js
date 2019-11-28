import styled from '@emotion/styled'

const Menu = styled.ul`
  background: #fafafa;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  list-style: none;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
`

const Link = styled.li`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 28px;
  margin: 24px 0;
`

export default { Menu, Link }
