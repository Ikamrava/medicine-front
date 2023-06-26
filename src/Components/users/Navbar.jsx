import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Avatar from 'react-avatar';

function NavBar() {
  const [activeUser, setActiveUser] = useState(null || JSON.parse(localStorage.getItem('currentUser')));

  function logoutHandler() {
    localStorage.removeItem('currentUser');
    setActiveUser(null);
    window.location.href = "/";

  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {activeUser && 
               <Avatar name={activeUser.user.email}  size={35} round={true} className="mx-5" />
             }
             {activeUser && 
             
               <NavDropdown title={activeUser.user.firstName} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>LogOut</NavDropdown.Item>
               </NavDropdown>
           
             }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;