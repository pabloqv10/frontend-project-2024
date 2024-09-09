import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

export const NewTodo = ({ addTodo }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [prioridad, setPrioridad] = useState('baja');

  const manejarEnvio = (e) => {
    e.preventDefault();
    addTodo({ titulo, descripcion, fecha, prioridad });
    setTitulo('');
    setDescripcion('');
    setFecha('');
    setPrioridad('baja');
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Crear Nueva Tarea</h2>
      <Form onSubmit={manejarEnvio}>
        <Form.Group controlId="formTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título de la tarea"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescripcion" className="mt-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese la descripción de la tarea"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formFecha" className="mt-3">
          <Form.Label>Fecha de Vencimiento</Form.Label>
          <Form.Control
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPrioridad" className="mt-3">
          <Form.Label>Prioridad</Form.Label>
          <Form.Control
            as="select"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Agregar Tarea
        </Button>
      </Form>
    </Container>
  );
};
