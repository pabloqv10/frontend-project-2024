import { Table, Card, ButtonGroup, Button } from "react-bootstrap";

// Componente para mostrar las órdenes creadas
export const OrderList = ({ ordenes }) => {
  return (
    <Card className="p-4">
      <Card.Body>
        <Card.Title>Órdenes de Venta Creadas</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{orden.cliente}</td>
                <td>{orden.producto}</td>
                <td>{orden.cantidad}</td>
                <td>${orden.precio.toFixed(2)}</td>
                <td>${orden.total.toFixed(2)}</td>
                <td>
                  <ButtonGroup>
                    <Button
                      variant="outline-secondary"
                      className="btn-sm"
                    >
                      Eliminar
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
