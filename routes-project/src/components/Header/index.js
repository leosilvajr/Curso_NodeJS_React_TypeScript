
import { Link } from 'react-router-dom';
import './style.css';

function Header(){ //Criando a minha Header que sera renderizado em todo site inteiro
  return(
    <header>
      <h2>Leozera Jr</h2>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </header>
  )
}

export default Header;