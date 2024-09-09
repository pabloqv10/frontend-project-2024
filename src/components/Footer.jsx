import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Juan Pablo Quiceno Valencia.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
