import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { CreateOrderForm } from '../components/CreateOrderForm';
import { OrderList } from '../components/OrderList';
import { MainLayout } from '../layouts/MainLayout';

export const Order = () => {
  const [ordenes, setOrdenes] = useState([]);

  const agregarOrden = (nuevaOrden) => {
    setOrdenes([...ordenes, nuevaOrden]);
  };

  return (
    <MainLayout>
      <Container className="mt-5">
        <h1 className="text-center mb-4">Gestión de Órdenes de Venta</h1>
        <CreateOrderForm agregarOrden={agregarOrden} />
        <OrderList ordenes={ordenes} />
      </Container>
    </MainLayout>
  );
};