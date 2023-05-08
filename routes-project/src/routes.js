
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro'; /* Adicionando import do Error */
import Produto from './pages/Produto';

/* Adicionando import do Header */
import Header from './components/Header';


function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>  {/* Chamando o Header nas Rotas */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/sobre" element={ <Sobre/> } />
        <Route path="/contato" element={ <Contato/> } />
        <Route path="/produto/:id" element={ <Produto/> } />
                            {/* id = parametro passado no produto. */}

        <Route path="*" element={ <Erro/> } /> {/*Componente de erro*/}
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;