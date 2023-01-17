import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
function Header() {
  return (
    <div>
         <Navbar bg="dark" variant="dark" sticky="top"  >
        <Container>
            
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"  className="justify-content-end">Bookmarks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header