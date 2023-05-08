import { useEffect, useState } from "react";
import api from "../../services/api";

//URL DA API: /movie/now_playing?api_key=6f48ba9883c7db588af9cfa4e86f3990&language=pt-BR



function Home(){

    const [filmes, setFilmes] = useState([]); //Vai começar com array vazio

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"6f48ba9883c7db588af9cfa4e86f3990",
                    language: "pt-BR",
                    page:1
                }
            } )

            console.log(response.data.results);
        }

        loadFilmes();
    }, [])

    return(
        <div>
            <h1>Home - Page</h1>
        </div>
    )
}

export default Home;