import { Link } from 'react-router-dom';
import Home from '../Home';

//Instalar roteamento de paginas "npm install react-router-dom"

function Sobre() {
  return (
    <div>
      <h1>Pagina sobre a empresa.</h1>
      <Link to="/" > Home </Link> <br/>
      <Link to="/sobre" > Sobre </Link> <br/>
      <Link to="/contato" > Contato </Link> <br/>
    </div>
  );
}

export default Sobre;
