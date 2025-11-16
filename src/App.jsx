import React, { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Badge, 
  InputGroup, 
  FormControl, 
  Navbar, 
  Nav,
  Carousel,
  ListGroup,
  Dropdown
} from 'react-bootstrap';
import FoodPage from './pages/FoodPage.jsx';
import OfferteDelGiorno from './pages/OfferteDelGiorno.jsx';
import ServizioClienti from './pages/ServizioClienti.jsx';
import ListaDesideri from './pages/ListaDesideri.jsx';
import BuoniRegalo from './pages/BuoniRegalo.jsx';
import { ShoppingCart, Search, Heart, Star, Plus, Minus, Trash, User, Menu } from 'lucide-react';

const AmazonMockup = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: "Laptop Ultra HD 15.6\"",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 1234,
      category: "Elettronica",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Cuffie Wireless Premium",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 892,
      category: "Audio",
      badge: "Scelta Amazon"
    },
    {
      id: 3,
      name: "Smartwatch Sport Pro",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 567,
      category: "Wearable",
      badge: "Offerta"
    },
    {
      id: 4,
      name: "Fotocamera Mirrorless 24MP",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 445,
      category: "Fotografia",
      badge: "Premium"
    },
    {
      id: 5,
      name: "Tablet 10\" 128GB",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 998,
      category: "Elettronica",
      badge: "Novità"
    },
    {
      id: 6,
      name: "Speaker Bluetooth Portatile",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 756,
      category: "Audio",
      badge: "Bestseller"
    },
    {
      id: 7,
      name: "Caffè Biologico 1kg",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 876,
      category: "Alimentari",
      badge: "Biologico"
    },
    {
      id: 8,
      name: "Pasta Artigianale 500g",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1621996346565-e326e2021e3a?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 1203,
      category: "Alimentari",
      badge: "Artigianale"
    },
    {
      id: 9,
      name: "Olio Extra Vergine d'Oliva",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1626201469212-2a24a2a05454?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 654,
      category: "Alimentari",
      badge: "Novità"
    }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1}
          : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? {...item, quantity: newQuantity} : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const Header = () => (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3 shadow-sm">
        <Container fluid>
          <Navbar.Brand 
            onClick={() => setCurrentPage('home')} 
            style={{ cursor: 'pointer', fontSize: '1.8rem', fontWeight: 'bold', color: '#FF9900' }}>
            amazon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mx-auto w-100 px-lg-5">
              <InputGroup>
                <FormControl
                  placeholder="Cerca su Amazon.it"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ borderRight: 'none' }}
                />
                <Button variant="warning" style={{ backgroundColor: '#FF9900', borderColor: '#FF9900' }}>
                  <Search size={20} />
                </Button>
              </InputGroup>
            </div>
            <Nav className="ms-auto align-items-center">
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="text-white d-flex align-items-center">
                  <User className="me-2" />
                  <div>
                    <span style={{ fontSize: '0.8rem' }}>Ciao, Utente</span>
                    <strong style={{ display: 'block', lineHeight: 1 }}>Account & Liste</strong>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Il mio account</Dropdown.Item>
                  <Dropdown.Item>I miei ordini</Dropdown.Item>
                  <Dropdown.Item onClick={() => setCurrentPage('lista-desideri')}>La mia lista desideri</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Esci</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link 
                onClick={() => setCurrentPage('cart')} 
                className="position-relative text-white d-flex align-items-center ms-lg-3">
                <ShoppingCart size={32} />
                <div className="ms-2">
                  <span style={{ fontSize: '0.8rem' }}>Carrello</span>
                  {getTotalItems() > 0 && (
                    <Badge 
                      bg="warning" 
                      text="dark"
                      pill>
                      {getTotalItems()}
                    </Badge>
                  )}
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg" className="px-3 border-bottom">
        <Container fluid>
          <Nav>
            <Nav.Link onClick={() => setCurrentPage('offerte')}>
              <Menu size={20} className="me-1" />
              Tutte le categorie
            </Nav.Link>
            <Nav.Link onClick={() => setCurrentPage('offerte')}>Offerte del giorno</Nav.Link>
            <Nav.Link onClick={() => setCurrentPage('food')}>Alimentari</Nav.Link>
            <Nav.Link onClick={() => setCurrentPage('servizio-clienti')}>Servizio Clienti</Nav.Link>
            <Nav.Link onClick={() => setCurrentPage('lista-desideri')}>Lista desideri</Nav.Link>
            <Nav.Link onClick={() => setCurrentPage('buoni-regalo')}>Buoni Regalo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );

  const HomePage = () => (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Carousel className="mb-4">
        <Carousel.Item>
          <div 
            className="d-flex align-items-center justify-content-center text-white"
            style={{ 
              height: '400px', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
            <div className="text-center">
              <h2 className="display-4 fw-bold mb-3">Le migliori offerte tech</h2>
              <p className="fs-4 mb-4">Scopri i prodotti più innovativi</p>
              <Button variant="warning" size="lg">Acquista ora</Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div 
            className="d-flex align-items-center justify-content-center text-white"
            style={{ 
              height: '400px', 
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            }}>
            <div className="text-center">
              <h2 className="display-4 fw-bold mb-3">Elettronica di qualità</h2>
              <p className="fs-4 mb-4">Spedizione gratuita su migliaia di prodotti</p>
              <Button variant="warning" size="lg">Esplora</Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container className="py-4">
        <Row className="mb-4">
          <Col xs={12} md={4} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Elettronica</Card.Title>
                <Card.Text className="text-muted">
                  Scopri i dispositivi più recenti
                </Card.Text>
                <Card.Img 
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=200&fit=crop" 
                  style={{ height: '150px', objectFit: 'cover' }}
                  className="rounded"
                />
                <Button variant="outline-secondary" size="sm" className="w-100 mt-3">
                  Vedi altro
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Audio & Video</Card.Title>
                <Card.Text className="text-muted">
                  Suono e immagini di qualità
                </Card.Text>
                <Card.Img 
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=200&fit=crop" 
                  style={{ height: '150px', objectFit: 'cover' }}
                  className="rounded"
                />
                <Button variant="outline-secondary" size="sm" className="w-100 mt-3">
                  Vedi altro
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Smart Home</Card.Title>
                <Card.Text className="text-muted">
                  Rendi la tua casa intelligente
                </Card.Text>
                <Card.Img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=200&fit=crop" 
                  style={{ height: '150px', objectFit: 'cover' }}
                  className="rounded"
                />
                <Button variant="outline-secondary" size="sm" className="w-100 mt-3">
                  Vedi altro
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="mb-4">Prodotti in evidenza</h2>
        <Row>
          {products.filter(p => p.category !== 'Alimentari').map(product => (
            <Col key={product.id} xs={12} sm={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-shadow">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <Badge 
                    bg="warning" 
                    text="dark"
                    className="position-absolute top-0 start-0 m-2">
                    {product.badge}
                  </Badge>
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

  const CartPage = () => (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Container className="py-4">
        <h1 className="mb-4">Carrello della spesa</h1>
        
        {cart.length === 0 ? (
          <Card>
            <Card.Body className="text-center py-5">
              <ShoppingCart size={64} className="text-muted mb-3" />
              <h2>Il tuo carrello è vuoto</h2>
              <p className="text-muted mb-4">Aggiungi prodotti per iniziare lo shopping!</p>
              <Button 
                variant="warning" 
                size="lg" 
                onClick={() => setCurrentPage('home')}>
                Continua lo shopping
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <Row>
            <Col xs={12} lg={8} className="mb-4">
              <Card>
                <ListGroup variant="flush">
                  {cart.map(item => (
                    <ListGroup.Item key={item.id}>
                      <Row className="align-items-center">
                        <Col xs={12} sm={3} className="mb-3 mb-sm-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="img-fluid rounded"
                          />
                        </Col>
                        <Col xs={12} sm={5} className="mb-3 mb-sm-0">
                          <h5>{item.name}</h5>
                          <Badge bg="success" className="mb-2">Disponibile</Badge>
                          <div className="d-flex align-items-center gap-2">
                            <Button 
                              variant="secondary" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, -1)}>
                              <Minus size={16} />
                            </Button>
                            <span className="fw-bold px-3">{item.quantity}</span>
                            <Button 
                              variant="secondary" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, 1)}>
                              <Plus size={16} />
                            </Button>
                            <Button 
                              variant="danger" 
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="ms-2">
                              <Trash size={16} />
                            </Button>
                          </div>
                        </Col>
                        <Col xs={12} sm={4} className="text-sm-end">
                          <div className="fs-4 fw-bold text-danger">
                            €{(item.price * item.quantity).toFixed(2)}
                          </div>
                          <small className="text-muted">€{item.price} cad.</small>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>

            <Col xs={12} lg={4}>
              <Card className="sticky-top" style={{ top: '100px' }}>
                <Card.Body>
                  <Card.Title>Riepilogo ordine</Card.Title>
                  <ListGroup variant="flush" className="mb-3">
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Articoli ({getTotalItems()}):</span>
                      <span className="fw-semibold">€{getTotalPrice()}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Spedizione:</span>
                      <Badge bg="success">GRATIS</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span className="fw-bold fs-5">Totale:</span>
                      <span className="fw-bold fs-5 text-danger">€{getTotalPrice()}</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="d-grid gap-2">
                    <Button variant="warning" size="lg">
                      Procedi all'acquisto
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="lg"
                      onClick={() => setCurrentPage('home')}>
                      Continua lo shopping
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'cart':
        return <CartPage />;
      case 'food':
        return <FoodPage products={products} addToCart={addToCart} />;
      case 'offerte':
        return <OfferteDelGiorno />;
      case 'servizio-clienti':
        return <ServizioClienti />;
      case 'lista-desideri':
        return <ListaDesideri />;
      case 'buoni-regalo':
        return <BuoniRegalo />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Header />
      {renderPage()}
    </>
  );
};

export default AmazonMockup;