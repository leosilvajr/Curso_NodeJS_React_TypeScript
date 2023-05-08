import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css';

//URL DA API: /movie/now_playing?api_key=6f48ba9883c7db588af9cfa4e86f3990&language=pt-BR



function Home(){

    const [filmes, setFilmes] = useState([]); //Vai começar com array vazio
    const [loading, setLoading] = useState(true); //Booleano

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"6f48ba9883c7db588af9cfa4e86f3990",
                    language: "pt-BR",
                    page:1
                }
            } )

            //console.log(response.data.results.slice(0,10)); //Pegar do 0 a 9
            setFilmes(response.data.results.slice(0,10))
            setLoading(false); //Apos carregar os filmes o loading some.
        }

        loadFilmes();
    }, [])


    if(loading){ //Se o loading estiver true
        return(
            <div className="loading">
                <h2>Carregando ...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filme">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}> Acessar </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;