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
          <Route path='/cliente' element={<Cliente />} />
          <Route path='/cadastro' element={<Cadastro text="Cadastro de novo cliente"/>} />
          <Route path='/cadastro/edit/:id' element={<Cadastro text="Atualização cadastral"/>} />
        </Routes>
    </Router>
  );
}

export default App;
