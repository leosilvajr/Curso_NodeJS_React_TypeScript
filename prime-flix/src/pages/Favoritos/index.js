import {useEffect , useState} from 'react';
//Usado para pegar dados no LocalStorage
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import './favoritos.css'

function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) ||[])
    }, [])

    
    function excluirFilme(id){ //Recebe o id na funçao anonima do App
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })
        setFilmes(filtroFilmes); //Falta remover do localstorage
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        NotificationManager.success('Removido com sucesso.');
    }

    return(
        <div className="meus-filmes" >
            <h1>Meus Filmes</h1>           
            {filmes.length === 0 && <span> Você não possui nenhum filme salvo, que tistreza.</span> }
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title} - </span>
                            <div>
                                <Link to={`/filme/${item.id}`}>  Ver detalhes  </Link>
                                <button onClick={() => excluirFilme(item.id)} >Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favoritos;