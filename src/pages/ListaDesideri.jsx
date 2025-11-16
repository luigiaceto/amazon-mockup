import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Heart } from 'lucide-react';

const ListaDesideri = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Container className="py-4">
        <h1 className="mb-4">Lista dei Desideri</h1>
        <Card>
          <Card.Body className="text-center py-5">
            <Heart size={64} className="text-muted mb-3" />
            <h2>Pagina in Costruzione</h2>
            <p className="text-muted mb-4">Crea la tua lista dei desideri e condividila con amici e familiari. Torna a trovarci presto!</p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ListaDesideri;
