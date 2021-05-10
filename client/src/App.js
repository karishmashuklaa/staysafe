import './App.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/layout/Home';
import Product from './components/products/Product';

function App() {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
      </Container>
      </main>
    <Footer />
    </Router>
  );
}

export default App;
