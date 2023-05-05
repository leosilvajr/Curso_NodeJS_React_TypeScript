import { useState, useEffect } from "react";

function App(){
  const [input, setInput] = useState('');
  const [tarefas , setTarefas] = useState([
    'Pagar a conta de Luz',
    'Estudar React JS'
  ]);

  //Aqui vamos ler oque tem no localstorage da aplicaçao
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if (tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);


  //Toda vez que monta os componentes da tela essa função é executada.
  useEffect(()=>{

    //Armazenamento da aplicação e transformando array em string
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))

  },[tarefas]);


  function handleRegister(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
      setInput('');
  }
 
  return (
    <div>
        <h1>Cadastrando Usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa: </label><br/>
        <input
         placeholder="Digite o seu nome:"
         value={input}
         onChange={ (e) => setInput(e.target.value) }
        /><br/>
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <ul>
        {tarefas.map( tarefa =>(
          <li key={tarefa} >{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

