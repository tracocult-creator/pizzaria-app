import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <p>© {new Date().getFullYear()} Pizzaria Digital. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
