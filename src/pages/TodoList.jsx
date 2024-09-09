import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export const TodoList = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Tareas</h2>
      <Row>
        {tareas.map((tarea, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{tarea.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Fecha de Vencimiento: {tarea.fecha}
                </Card.Subtitle>
                <Card.Text>
                  {tarea.descripcion}
                </Card.Text>
                <Card.Footer className="text-end">
                  <Button
                    variant={tarea.prioridad === 'alta' ? 'danger' : tarea.prioridad === 'media' ? 'warning' : 'secondary'}
                    disabled
                  >
                    Prioridad: {tarea.prioridad.charAt(0).toUpperCase() + tarea.prioridad.slice(1)}
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
