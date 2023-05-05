import React, { useEffect, useState } from "react";
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

//Carregar informaçoes ao abrir o projeto.
function App() {

  const [nutri, setNutri] = useState([]);

  //Aço executada ao carregar o site.
  useEffect(()=>{
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url) //Faz a requisição da URL
      .then((r)=> r.json()) //Transforma o resultado em JSON
      .then((json)=>{ //Tras todo o json da API 
        setNutri(json); //Armazena o json dentro do Array useState nutri para usar no App
      })
    }

    loadApi();

  },[]);

  return (
    <div className="container" >
      <header>
        <strong>Project Nutri</strong>
      </header>

      {nutri.map((item)=>{ //Map para percorrer os itens do arry Nutri
        return(   //item. aqui voce pode acessar cada parametro do json
          <article key={item.id} className="post">  
            <strong className="titulo">{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa" />

            <p className="subtitulo" >
              {item.subtitulo}
            </p>
            <a className="botao" > Acessar </a>

          </article>
        )
      })}

    </div>
  );
}

export default App;
