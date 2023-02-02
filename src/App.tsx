import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Homes';
import { About } from './pages/About';
import { Store } from './pages/Store';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
  <Container className='mb-4'>
    <Route path='/' element={<Home />} />
    <Route path='/store' element={<Store />} />
    <Route path='/about' element={<About />} />
  </Container>
  </>
  )
}

export default App;
