import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="hero">
      <span className="hero-eyebrow">Pizzaria Digital · Cardápio &amp; Pedidos online</span>
      <h1 className="hero-title">
        Sua pizza favorita,<br />
        <span className="accent">direto do forno a lenha</span>
      </h1>
      <p className="hero-subtitle">
        Monte seu pedido em poucos cliques, acompanhe o carrinho em tempo real
        e finalize com aquele cheirinho de massa fresca chegando em minutos.
      </p>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Button as={Link} to="/cardapio" variant="primary" size="lg">
          Ver Cardápio
        </Button>
        <span className="hero-stamp">🔥 Forno aceso até 23h</span>
      </div>

      <div className="feature-strip">
        <div className="feature">
          <span className="feature-icon">🍕</span>
          <h3>Receitas artesanais</h3>
          <p>Massa fermentada 48h e ingredientes selecionados todos os dias.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🧾</span>
          <h3>Pedido por comanda</h3>
          <p>Cada item vira uma ficha de pedido, igual à da cozinha.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🛵</span>
          <h3>Entrega rápida</h3>
          <p>Acompanhe seu carrinho salvo automaticamente até o checkout.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
