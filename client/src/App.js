import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home'
import Cliente from './components/pages/Cliente'
import Cadastro from './components/pages/Cadastro';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/clientes' element={<Cliente />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
    </Router>
  );
}

export default App;
