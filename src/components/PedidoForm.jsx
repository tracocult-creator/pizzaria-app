import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

function PedidoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Dados do Pedido:', data);
    alert('Pedido realizado com sucesso! Verifique o console para os dados.');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <h2>Seus Dados</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Seu nome"
            {...register('nome', { required: 'Nome é obrigatório' })}
          />
          {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="seu@email.com"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEndereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          placeholder="Rua, número, bairro"
          {...register('endereco', { required: 'Endereço é obrigatório' })}
        />
        {errors.endereco && <p className="text-danger">{errors.endereco.message}</p>}
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridTelefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="(XX) XXXXX-XXXX"
            {...register('telefone', {
              required: 'Telefone é obrigatório',
              pattern: {
                value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                message: 'Formato de telefone inválido'
              }
            })}
          />
          {errors.telefone && <p className="text-danger">{errors.telefone.message}</p>}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPagamento">
          <Form.Label>Forma de Pagamento</Form.Label>
          <Form.Select
            defaultValue="Dinheiro"
            {...register('pagamento', { required: 'Forma de pagamento é obrigatória' })}
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="CartaoCredito">Cartão de Crédito</option>
            <option value="CartaoDebito">Cartão de Débito</option>
            <option value="Pix">Pix</option>
          </Form.Select>
          {errors.pagamento && <p className="text-danger">{errors.pagamento.message}</p>}
        </Form.Group>
      </Row>

      <Button variant="success" type="submit">
        Finalizar Pedido
      </Button>
    </Form>
  );
}

export default PedidoForm;
