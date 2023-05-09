import './header.css';
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>
            <img className='logo-img' src="https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg" alt="Chapeu" border="0"></img>
            </Link>
            <Link className='favoritos' to='/favoritos'> Meus Filmes </Link>
        </header>
    )
}

export default Header;
//Para renderizar o Header em todas as rotas
/*
Tem que importar no routes,
import Header from "./components/Header";
Adicionar o <Header/> Acima das Rotas
 
*/