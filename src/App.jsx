import React, { useState } from 'react';
import { ShoppingCart, Search, Heart, Star, Plus, Minus, Trash } from 'lucide-react';

// Simulazione di React Bootstrap con Tailwind
const Container = ({ children, fluid, className = '' }) => (
  <div className={`${fluid ? 'w-full' : 'max-w-7xl'} mx-auto px-4 ${className}`}>
    {children}
  </div>
);

const Row = ({ children, className = '' }) => (
  <div className={`flex flex-wrap -mx-2 ${className}`}>{children}</div>
);

const Col = ({ children, xs, sm, md, lg, className = '' }) => {
  const getColClass = () => {
    let classes = 'px-2 ';
    if (xs) classes += `w-full `;
    if (sm) classes += `sm:w-${12/sm}/12 `;
    if (md) classes += `md:w-${12/md}/12 `;
    if (lg) classes += `lg:w-${12/lg}/12 `;
    return classes;
  };
  return <div className={`${getColClass()} ${className} mb-4`}>{children}</div>;
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardImg = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-64 object-cover" />
);

const CardBody = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    warning: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    outline: 'border-2 border-gray-300 hover:bg-gray-100 text-gray-700'
  };
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded font-semibold transition-all ${className}`}>
      {children}
    </button>
  );
};

const Badge = ({ children, bg = 'primary', className = '' }) => {
  const backgrounds = {
    primary: 'bg-blue-600',
    danger: 'bg-red-600',
    warning: 'bg-yellow-500',
    success: 'bg-green-600',
    secondary: 'bg-gray-500'
  };
  
  return (
    <span className={`${backgrounds[bg]} text-white px-2 py-1 rounded-full text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
};

const InputGroup = ({ children, className = '' }) => (
  <div className={`flex ${className}`}>{children}</div>
);

const FormControl = ({ placeholder, value, onChange, className = '' }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

const Navbar = ({ children, bg = 'dark', variant = 'dark', className = '' }) => (
  <nav className={`${bg === 'dark' ? 'bg-gray-900' : 'bg-white'} ${variant === 'dark' ? 'text-white' : 'text-gray-900'} sticky top-0 z-50 shadow-lg ${className}`}>
    {children}
  </nav>
);

const Carousel = ({ children, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = React.Children.toArray(children);
  
  return (
    <div className={`relative ${className}`}>
      {items[activeIndex]}
      <button 
        onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
        ←
      </button>
      <button 
        onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full">
        →
      </button>
    </div>
  );
};

const CarouselItem = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

const ListGroup = ({ children, className = '' }) => (
  <div className={`border border-gray-200 rounded ${className}`}>{children}</div>
);

const ListGroupItem = ({ children, className = '' }) => (
  <div className={`p-4 border-b last:border-b-0 ${className}`}>{children}</div>
);

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
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <div className="py-3">
          <Row className="items-center">
            <Col xs={12} md={2}>
              <h1 
                className="text-2xl font-bold cursor-pointer hover:text-orange-400 transition-colors"
                onClick={() => setCurrentPage('home')}>
                amazon
              </h1>
            </Col>
            <Col xs={12} md={7}>
              <InputGroup>
                <FormControl
                  placeholder="Cerca su Amazon"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-l"
                />
                <Button variant="warning" className="rounded-r rounded-l-none">
                  <Search size={20} />
                </Button>
              </InputGroup>
            </Col>
            <Col xs={12} md={3} className="flex justify-end items-center gap-4">
              <div className="text-sm">
                <div>Ciao, Utente</div>
                <div className="font-bold">Account & Liste</div>
              </div>
              <div 
                className="relative cursor-pointer hover:text-orange-400 transition-colors"
                onClick={() => setCurrentPage('cart')}>
                <ShoppingCart size={32} />
                {getTotalItems() > 0 && (
                  <Badge bg="danger" className="absolute -top-2 -right-2">
                    {getTotalItems()}
                  </Badge>
                )}
              </div>
            </Col>
          </Row>
        </div>
        <div className="bg-gray-800 px-4 py-2 -mx-4 flex gap-6 text-sm">
          <span className="cursor-pointer hover:text-orange-400">Offerte del giorno</span>
          <span className="cursor-pointer hover:text-orange-400">Servizio Clienti</span>
          <span className="cursor-pointer hover:text-orange-400">Lista desideri</span>
          <span className="cursor-pointer hover:text-orange-400">Buoni Regalo</span>
        </div>
      </Container>
    </Navbar>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-100">
      <Carousel className="mb-4">
        <CarouselItem>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 text-center text-white px-4">
              <h2 className="text-5xl font-bold mb-4">Le migliori offerte tech</h2>
              <p className="text-xl mb-6">Scopri i prodotti più innovativi</p>
              <Button variant="warning" size="lg">Acquista ora</Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative bg-gradient-to-r from-orange-500 to-red-600 h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 text-center text-white px-4">
              <h2 className="text-5xl font-bold mb-4">Elettronica di qualità</h2>
              <p className="text-xl mb-6">Spedizione gratuita su migliaia di prodotti</p>
              <Button variant="warning" size="lg">Esplora</Button>
            </div>
          </div>
        </CarouselItem>
      </Carousel>

      <Container className="py-4">
        <Row>
          <Col xs={12} md={4}>
            <Card className="hover:shadow-xl transition-shadow">
              <CardBody>
                <h3 className="text-xl font-bold mb-2">Elettronica</h3>
                <p className="text-gray-600 mb-4">Scopri i dispositivi più recenti</p>
                <img 
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=200&fit=crop" 
                  alt="Elettronica" 
                  className="w-full h-40 object-cover rounded mb-3" 
                />
                <Button variant="outline" size="sm" className="w-full">Vedi altro</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="hover:shadow-xl transition-shadow">
              <CardBody>
                <h3 className="text-xl font-bold mb-2">Audio & Video</h3>
                <p className="text-gray-600 mb-4">Suono e immagini di qualità</p>
                <img 
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=200&fit=crop" 
                  alt="Audio" 
                  className="w-full h-40 object-cover rounded mb-3" 
                />
                <Button variant="outline" size="sm" className="w-full">Vedi altro</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="hover:shadow-xl transition-shadow">
              <CardBody>
                <h3 className="text-xl font-bold mb-2">Smart Home</h3>
                <p className="text-gray-600 mb-4">Rendi la tua casa intelligente</p>
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=200&fit=crop" 
                  alt="Smart Home" 
                  className="w-full h-40 object-cover rounded mb-3" 
                />
                <Button variant="outline" size="sm" className="w-full">Vedi altro</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h2 className="text-3xl font-bold my-6">Prodotti in evidenza</h2>
        <Row>
          {products.map(product => (
            <Col key={product.id} xs={12} sm={6} lg={4}>
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-1 h-full">
                <div className="relative">
                  <CardImg src={product.image} alt={product.name} />
                  <Badge bg="warning" className="absolute top-4 left-4">
                    {product.badge}
                  </Badge>
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-red-50">
                    <Heart size={20} className="text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <CardBody>
                  <Badge bg="secondary" className="mb-2">{product.category}</Badge>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">€{product.price}</span>
                    <Button
                      variant="warning"
                      onClick={() => addToCart(product)}>
                      Aggiungi
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );

  const CartPage = () => (
    <div className="min-h-screen bg-gray-100">
      <Container className="py-4">
        <h1 className="text-3xl font-bold mb-4">Carrello della spesa</h1>
        
        {cart.length === 0 ? (
          <Card>
            <CardBody className="text-center py-12">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Il tuo carrello è vuoto</h2>
              <p className="text-gray-600 mb-4">Aggiungi prodotti per iniziare lo shopping!</p>
              <Button variant="warning" size="lg" onClick={() => setCurrentPage('home')}>
                Continua lo shopping
              </Button>
            </CardBody>
          </Card>
        ) : (
          <Row>
            <Col xs={12} lg={8}>
              <Card className="mb-4">
                <CardBody>
                  <ListGroup>
                    {cart.map(item => (
                      <ListGroupItem key={item.id}>
                        <Row className="items-center">
                          <Col xs={12} sm={3}>
                            <img src={item.image} alt={item.name} className="w-full rounded" />
                          </Col>
                          <Col xs={12} sm={5}>
                            <h4 className="font-semibold mb-2">{item.name}</h4>
                            <Badge bg="success" className="mb-2">Disponibile</Badge>
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="secondary" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, -1)}>
                                <Minus size={16} />
                              </Button>
                              <span className="font-semibold px-3">{item.quantity}</span>
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
                                className="ml-2">
                                <Trash size={16} />
                              </Button>
                            </div>
                          </Col>
                          <Col xs={12} sm={4} className="text-right">
                            <div className="text-2xl font-bold text-orange-600">
                              €{(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-500">€{item.price} cad.</div>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} lg={4}>
              <Card className="sticky top-24">
                <CardBody>
                  <h3 className="text-xl font-bold mb-4">Riepilogo ordine</h3>
                  <ListGroup className="mb-4">
                    <ListGroupItem className="flex justify-between">
                      <span>Articoli ({getTotalItems()}):</span>
                      <span className="font-semibold">€{getTotalPrice()}</span>
                    </ListGroupItem>
                    <ListGroupItem className="flex justify-between">
                      <span>Spedizione:</span>
                      <Badge bg="success">GRATIS</Badge>
                    </ListGroupItem>
                    <ListGroupItem className="flex justify-between">
                      <span className="font-bold text-lg">Totale:</span>
                      <span className="font-bold text-lg text-orange-600">€{getTotalPrice()}</span>
                    </ListGroupItem>
                  </ListGroup>
                  <Button variant="warning" size="lg" className="w-full mb-2">
                    Procedi all'acquisto
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setCurrentPage('home')}>
                    Continua lo shopping
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {currentPage === 'home' ? <HomePage /> : <CartPage />}
    </div>
  );
};

export default AmazonMockup;