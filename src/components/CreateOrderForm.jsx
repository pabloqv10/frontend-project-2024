import { useState } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';

// Componente para crear la orden de venta
export const CreateOrderForm = ({ agregarOrden }) => {
  const [cliente, setCliente] = useState('');
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');

  // Maneja el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();

    // Crear nueva orden
    const nuevaOrden = {
      cliente,
      producto,
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
      total: parseInt(cantidad) * parseFloat(precio),
    };

    // Agrega la orden al estado principal
    agregarOrden(nuevaOrden);

    // Resetea los campos del formulario
    setCliente('');
    setProducto('');
    setCantidad('');
    setPrecio('');
  };

  return (
    <Card className="p-4 mb-4">
      <Card.Body>
        <Card.Title>Crear Nueva Orden de Venta</Card.Title>
        <Form onSubmit={manejarEnvio}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formCliente">
                <Form.Label>Nombre del Cliente</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre del cliente"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formProducto">
                <Form.Label>Producto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre del producto"
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formCantidad">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese la cantidad"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formPrecio">
                <Form.Label>Precio Unitario</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Ingrese el precio unitario"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Crear Orden
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};