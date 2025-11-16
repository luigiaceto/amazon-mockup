import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Heart, Star } from 'lucide-react';

const ServizioClienti = ({ products, addToCart }) => {
  const servizioClientiProducts = products.filter(p => p.category === 'Servizio Clienti');

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Container className="py-4">
        <h2 className="mb-4">Servizio Clienti</h2>
        <Row>
          {servizioClientiProducts.map(product => (
            <Col key={product.id} xs={12} sm={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-shadow">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  {product.badge && (
                    <Badge 
                      bg="warning" 
                      text="dark"
                      className="position-absolute top-0 start-0 m-2">
                      {product.badge}
                    </Badge>
                  )}
                  <Button 
                    variant="light" 
                    className="position-absolute top-0 end-0 m-2 rounded-circle"
                    style={{ width: '40px', height: '40px', padding: 0 }}>
                    <Heart size={20} />
                  </Button>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Badge bg="secondary" className="align-self-start mb-2">
                    {product.category}
                  </Badge>
                  <Card.Title className="fs-6">{product.name}</Card.Title>
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-warning d-flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                    <small className="text-muted ms-2">({product.reviews})</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="fs-4 fw-bold text-danger">€{product.price}</span>
                    <Button 
                      variant="warning" 
                      onClick={() => addToCart(product)}>
                      Aggiungi
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServizioClienti;
