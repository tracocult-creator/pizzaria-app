import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Alert, Card, Button } from 'react-bootstrap';
import pizzasData from '../data/pizzas';
import { useCart } from '../context/CartContext';

function DetalhePizzaPage() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [pizza, setPizza] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const foundPizza = pizzasData.find((p) => p.id === id);
        if (foundPizza) {
          setPizza(foundPizza);
        } else {
          setError('Pizza não encontrada.');
        }
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar detalhes da pizza.');
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: pizza });
    alert(`${pizza.name} adicionada ao carrinho!`);
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <p>Carregando detalhes da pizza...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Erro: {error}</Alert>;
  }

  if (!pizza) {
    return <Alert variant="info">Nenhuma pizza encontrada com este ID.</Alert>;
  }

  return (
    <Card className="mt-4" style={{ maxWidth: '480px' }}>
      <Card.Img
        variant="top"
        src={pizza.image}
        alt={pizza.name}
        style={{ maxHeight: '300px', objectFit: 'cover' }}
      />
      <Card.Body>
        <span className="ticket-code">Pedido nº {String(pizza.id).replace(/\D/g, '').padStart(3, '0')}</span>
        <Card.Title as="h1">{pizza.name}</Card.Title>
        <Card.Text>{pizza.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="price-tag fs-4">R$ {pizza.price.toFixed(2)}</span>
          <Button variant="primary" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DetalhePizzaPage;
