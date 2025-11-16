import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { LifeBuoy } from 'lucide-react';

const ServizioClienti = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Container className="py-4">
        <h1 className="mb-4">Servizio Clienti</h1>
        <Card>
          <Card.Body className="text-center py-5">
            <LifeBuoy size={64} className="text-muted mb-3" />
            <h2>Pagina in Costruzione</h2>
            <p className="text-muted mb-4">Il nostro team di supporto è quasi pronto. Torna a trovarci presto!</p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ServizioClienti;
