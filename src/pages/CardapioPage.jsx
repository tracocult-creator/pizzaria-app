import React from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import PizzaCard from '../components/PizzaCard';
import pizzasData from '../data/pizzas';

function CardapioPage() {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
     
    const timer = setTimeout(() => {
      try {
        setPizzas(pizzasData);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar as pizzas.');
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <p>Carregando cardápio...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Erro: {error}</Alert>;
  }

  return (
    <div>
      <h1>Nosso Cardápio</h1>
      <p>Escolha suas pizzas favoritas!</p>
      <Row>
        {pizzas.map((pizza) => (
          <Col key={pizza.id} sm={12} md={6} lg={4}>
            <PizzaCard pizza={pizza} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardapioPage;
