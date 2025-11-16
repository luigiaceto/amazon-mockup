import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Gift } from 'lucide-react';

const BuoniRegalo = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Container className="py-4">
        <h1 className="mb-4">Buoni Regalo</h1>
        <Card>
          <Card.Body className="text-center py-5">
            <Gift size={64} className="text-muted mb-3" />
            <h2>Pagina in Costruzione</h2>
            <p className="text-muted mb-4">La funzionalità per acquistare e utilizzare i buoni regalo sarà presto disponibile. Torna a trovarci presto!</p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default BuoniRegalo;
