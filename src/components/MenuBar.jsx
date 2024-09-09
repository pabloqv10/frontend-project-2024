import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const MenuBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">Proyecto Frontend</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home">Inicio</Nav.Link>
          <Nav.Link as={NavLink} to="/orders">Ordenes</Nav.Link>
          <Nav.Link as={NavLink} to="/todo">Mis Tareas</Nav.Link>
          <Nav.Link as={NavLink} to="/users">Administras usuarios</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}