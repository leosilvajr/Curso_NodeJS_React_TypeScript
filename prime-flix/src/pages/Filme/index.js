import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme-info.css';
import api from '../../services/api'
import {toast} from 'react-toastify'

function Filme(){

    const {id} = useParams();
    const navigate = useNavigate(); //VAMOS USAR PARA JOGAR O USUARIO PARA O HOME

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"6f48ba9883c7db588af9cfa4e86f3990",
                    language: "pt-BR"
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme nao encontrado.")
                navigate("/", {replace: true} ) //JOGA O USUARIO PAR A HOMEPAGE
                return;
            })
        }
        loadFilme();

        return () => {
            console.log("Componente foi desmontado.");
        }

    },[navigate, id])


    function salvarFilme(){
        //Pegar os filmes da minha lista
        const  minhaLista = localStorage.getItem("@primeflix");

                        //Converter de volta para uma lista.
        let filmesSalvos = JSON.parse(minhaLista) || []; //Se nao tiver nada cria array vazia

        //Some: metodo que verifica se dentro da lista tem um item com a comparaçao que voce fizer
        const hasFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme ja está na lista.");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Salvo com sucesso.");
    }

    if(loading){
        return(
            <div className="filme-info">
            <h2>Carregando ...</h2>
        </div>
        )
    }

    return (
        <div className="filme-info" >
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10 </strong>

            <div className="area-buttons">
                <button onClick={salvarFilme} >Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )   
}

export default Filme;