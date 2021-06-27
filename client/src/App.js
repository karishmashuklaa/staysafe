import './App.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home'
import Product from './components/products/Product'
import Cart from './components/layout/Cart'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'
import Shipping from './components/products/Shipping'

function App() {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/" exact component={Home} />

        <Route path="/product/:id" component={Product} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/shipping" component={Shipping} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </Container>
      </main>
    <Footer />
    </Router>
  );
}

export default App;
