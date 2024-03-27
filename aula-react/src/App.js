
import { useState, useEffect } from 'react';

//Componentes
function App() {
  const [input, setInput] = useState('');//USESTATE ATRELADO AO INPUT
  const [tarefas, setTarefas] = useState([]);//VAI SER UMA ARRAY
 
useEffect(() => {
  const tarefasStorage = localStorage.getItem('@tarefa');

  if(tarefasStorage) {
    setTarefas(JSON.parse(tarefasStorage));
  }
}, []);

useEffect(() => {
  localStorage.setItem('@tarefa', JSON.stringify(tarefas));
}, [tarefas]);



  function registrar(event) {
    event.preventDefault();

    setTarefas([...tarefas, input])
    setInput('');
  }

  return(
    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={registrar}>
        <label>Nome da tarefa: </label><br/>
        <input
         placeholder='Digite uma tarefa'
         value={input}
         onChange={ (event) => setInput(event.target.value)}
         /><br/>
        <button type="submit">Registrar</button>
      </form>

      <br></br>

      <ul>
        {tarefas.map( tarefa=> (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

//Precisa exportar esse componente.
//Assim vai conseguir ser acessado por outros arquivos.
export default App;
