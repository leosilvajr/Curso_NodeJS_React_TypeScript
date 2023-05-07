import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Contato da Empresa (17) 3272-9300 </h1>
            <Link to="/" > Home </Link> <br/>
      <Link to="/sobre" > Sobre </Link> <br/>
      <Link to="/contato" > Contato </Link> <br/>
        </div>
    )
}

export default Contato;