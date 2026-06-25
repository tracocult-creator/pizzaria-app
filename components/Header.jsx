import React from 'react';
import { Navbar, Container, Nav, Badge, Button } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { cartState } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">PizzaBraz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={Link} to="/" className="nav-link">Home</NavLink>
            <NavLink as={Link} to="/cardapio" className="nav-link">Cardápio</NavLink>
            <NavLink as={Link} to="/carrinho" className="nav-link">
              Carrinho <Badge bg="secondary">{totalItems}</Badge>
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Navbar.Text className="me-3">Olá, {user?.name}!</Navbar.Text>
                <Button variant="outline-light" onClick={handleLogout}>Sair</Button>
              </>
            ) : (
              <NavLink as={Link} to="/login" className="nav-link">Login</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
