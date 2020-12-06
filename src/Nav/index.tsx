import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
const S = {
  NavBar: styled(Nav)`
  background-color: black;
  color: white;
  `
}
export default function NavigationBar() {
  return (
    <S.NavBar
    
    activeKey="/home"
  >
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </S.NavBar>
  )
}