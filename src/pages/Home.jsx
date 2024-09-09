import { MainLayout } from "../layouts/MainLayout";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

export const Home = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Manejo de órdenes",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imagen: "https://via.placeholder.com/300x200", // URL de imagen de ejemplo
    },
    {
      id: 2,
      titulo: "Manejo de tareas",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      imagen: "https://via.placeholder.com/300x200", // URL de imagen de ejemplo
    },
    {
      id: 3,
      titulo: "Eficienta de tiempo",
      descripcion:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
      imagen: "https://via.placeholder.com/300x200", // URL de imagen de ejemplo
    },
  ];

  const testimonios = [
    {
      id: 1,
      nombre: "Juan Pérez",
      comentario:
        "Excelente servicio y soporte. Mi negocio ha crecido gracias a su estrategia.",
      imagen: "https://via.placeholder.com/150", // URL de imagen del cliente
    },
    {
      id: 2,
      nombre: "María López",
      comentario:
        "El equipo es muy profesional y siempre están dispuestos a ayudar. ¡Muy recomendado!",
      imagen: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      nombre: "Carlos García",
      comentario:
        "La consultoría fue fundamental para optimizar nuestros procesos internos.",
      imagen: "https://via.placeholder.com/150",
    },
  ];

  return (
    <MainLayout>
      <>
        <Container className="my-5">
          <h2 className="text-center mb-4">Nuestros Servicios</h2>
          <Row>
            {servicios.map((servicio) => (
              <Col
                key={servicio.id}
                md={4}
                className="d-flex align-items-stretch mb-4"
              >
                <Card className="shadow-sm w-100">
                  <Card.Img
                    variant="top"
                    src={servicio.imagen}
                    alt={servicio.titulo}
                  />
                  <Card.Body>
                    <Card.Title>{servicio.titulo}</Card.Title>
                    <Card.Text>{servicio.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <h2 className="text-center mt-5 mb-4">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <Carousel className="w-75 mx-auto">
          {testimonios.map((testimonio) => (
            <Carousel.Item key={testimonio.id}>
              <Card className="text-center p-4 shadow-sm">
                <Card.Img
                  variant="top"
                  src={testimonio.imagen}
                  alt={testimonio.nombre}
                  className="rounded-circle mx-auto"
                  style={{ width: "100px", height: "100px" }}
                />
                <Card.Body>
                  <Card.Text>"{testimonio.comentario}"</Card.Text>
                  <Card.Subtitle className="mt-2">
                    - {testimonio.nombre}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    </MainLayout>
  );
};
