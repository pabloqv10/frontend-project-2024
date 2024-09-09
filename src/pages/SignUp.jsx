import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export const SignUp = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías manejar la lógica de envío del formulario
    console.log({ nombre, correo, contraseña });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Registro de Usuario</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNombre" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formCorreo" className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Introduce tu correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formContraseña" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Introduce tu contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Registrarse
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
