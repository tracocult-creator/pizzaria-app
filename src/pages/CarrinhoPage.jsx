import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import PedidoForm from '../components/PedidoForm';

function CarrinhoPage() {
  const { cartState, dispatch } = useCart();

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    alert('Carrinho limpo!');
  };

  return (
    <div>
      <h1>Seu Carrinho de Compras</h1>
      {cartState.items.length === 0 ? (
        <p>
          Seu carrinho está vazio. Adicione algumas pizzas do{' '}
          <Link to="/cardapio">cardápio</Link>!
        </p>
      ) : (
        <>
          <ListGroup>
            {cartState.items.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row className="align-items-center">
                  <Col xs={6}>{item.name} (x{item.quantity})</Col>
                  <Col xs={3}>R$ {(item.price * item.quantity).toFixed(2)}</Col>
                  <Col xs={3} className="text-end">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remover
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-3">Total: R$ {cartState.total.toFixed(2)}</h3>
          <Button variant="warning" onClick={handleClearCart} className="mt-3">
            Limpar Carrinho
          </Button>
          <hr className="my-4" />
          <PedidoForm />
        </>
      )}
    </div>
  );
}

export default CarrinhoPage;
