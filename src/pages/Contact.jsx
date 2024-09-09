import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { MainLayout } from '../layouts/MainLayout';

export const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Maneja el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    alert(`Mensaje enviado por: ${nombre}`);
    // Limpiar el formulario después del envío
    setNombre('');
    setCorreo('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <MainLayout>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Card className="p-4 mb-4">
              <Card.Body>
                <Card.Title>Contáctanos</Card.Title>
                <Form onSubmit={manejarEnvio}>
                  <Form.Group controlId="formNombre" className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formCorreo" className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su correo electrónico"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formAsunto" className="mb-3">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el asunto"
                      value={asunto}
                      onChange={(e) => setAsunto(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMensaje" className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Ingrese su mensaje"
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Enviar Mensaje
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="p-4 mb-4">
              <Card.Body>
                <Card.Title>Información de Contacto</Card.Title>
                <Card.Text>
                  <strong>Dirección:</strong> 123 Calle Principal, Ciudad, País
                </Card.Text>
                <Card.Text>
                  <strong>Teléfono:</strong> (123) 456-7890
                </Card.Text>
                <Card.Text>
                  <strong>Correo Electrónico:</strong> contacto@empresa.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
