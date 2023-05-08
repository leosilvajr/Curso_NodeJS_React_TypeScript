import './header.css';
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className='logo' to='/'> Prime Flix </Link>
            <Link className='favoritos' to='/favoritos'> Meus Filmes </Link>
        </header>
    )
}

//Para renderizar o Header em todas as rotas
/*
Tem que importar no routes,
import Header from "./components/Header";
Adicionar o <Header/> Acima das Rotas
 
*/
export default Header;