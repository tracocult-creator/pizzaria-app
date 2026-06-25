import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function PizzaCard({ pizza }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: pizza });
    alert(`${pizza.name} adicionada ao carrinho!`);
  };

  const codigo = String(pizza.id).replace(/\D/g, '').padStart(3, '0');

  return (
    <Card style={{ width: '18rem', marginBottom: '28px', marginTop: '12px' }}>
      <Card.Img variant="top" src={pizza.image} alt={pizza.name} />
      <Card.Body>
        <span className="ticket-code">Pedido nº {codigo}</span>
        <Card.Title>
          <Link to={`/pizza/${pizza.id}`} className="text-decoration-none text-dark">
            {pizza.name}
          </Link>
        </Card.Title>
        <Card.Text>{pizza.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="price-tag">R$ {pizza.price.toFixed(2)}</span>
          <Button variant="primary" size="sm" onClick={handleAddToCart}>
            Adicionar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;
