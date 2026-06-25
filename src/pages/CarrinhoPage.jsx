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
          <div className="ticket p-3 mb-4">
            <span className="ticket-code">Comanda · {cartState.items.length} item(ns)</span>
            <ListGroup variant="flush">
              {cartState.items.map((item) => (
                <ListGroup.Item key={item.id} className="bg-transparent px-0">
                  <Row className="align-items-center">
                    <Col xs={6}>{item.name} <span className="text-muted">(x{item.quantity})</span></Col>
                    <Col xs={3} className="price-tag">R$ {(item.price * item.quantity).toFixed(2)}</Col>
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
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mb-0">Total</h3>
              <span className="price-tag fs-4">R$ {cartState.total.toFixed(2)}</span>
            </div>
            <Button variant="warning" onClick={handleClearCart} className="mt-3">
              Limpar Carrinho
            </Button>
          </div>
          <PedidoForm />
        </>
      )}
    </div>
  );
}

export default CarrinhoPage;
