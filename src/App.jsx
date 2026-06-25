import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CardapioPage from './pages/CardapioPage';
import CarrinhoPage from './pages/CarrinhoPage';
import LoginPage from './pages/LoginPage';
import DetalhePizzaPage from './pages/DetalhePizzaPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1 mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cardapio" element={<CardapioPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pizza/:id" element={<DetalhePizzaPage />} />

         
          <Route element={<ProtectedRoute />}>
            <Route path="/carrinho" element={<CarrinhoPage />} />
          </Route>

           
          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
