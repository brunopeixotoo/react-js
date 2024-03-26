
import { useState } from 'react';


//Componentes
function App() {
  const [nome, setNome] = useState('');//CRIANDO USESTATE PARA CADA INPUT
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState( {} );//CRIANDO UM OBJETO VAZIO USESTATE
  //Vai ficar responsável por capiturar os valores dos userStates.

  function registar(event) {
    event.preventDefault();//Vai evitar a atualização do programa
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return(
    <div>
      <form onSubmit={registar}>
        <label>Nome: </label><br/>
        <input
         placeholder='Digite seu nome'
         value={nome}
         onChange={ (event) => setNome(event.target.value)}
         ></input><br/>

        <label>E-mail: </label><br/>
        <input 
        placeholder='Digite seu email'
        value={email}
        onChange={ (event) => setEmail(event.target.value)}
        ></input><br/>

        <label>Idade: </label><br/>
        <input 
        placeholder='Digite sua idade'
        value={idade}
        onChange={ (event) => setIdade(event.target.value)}
        ></input><br/>
    
        <button type="submit">Registrar</button>
      </form>
      <br></br>

      <div>
        <span>Bem vindo: {user.nome} </span><br/>
        <span>Idade: {user.idade} anos</span><br/>
        <span>Email: {user.email} </span><br/>

      </div>
    </div>
  );
}

//Precisa exportar esse componente.
//Assim vai conseguir ser acessado por outros arquivos.
export default App;
