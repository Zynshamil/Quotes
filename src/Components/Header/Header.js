import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  return (
    <div>
         <Navbar bg="dark" variant="dark" sticky="top"  >
        <Container>
            
          <Navbar.Brand href="#home"
           onClick = {()=> {navigate("/") }} >
            Home</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"  className="justify-content-end"
            onClick={()=> {
                navigate("/bookamrks")
            }} >Bookmarks</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header