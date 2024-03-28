
import { useState, useEffect } from 'react';
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

//Componentes
function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => { //Como está vazia, o useEffect vai ser chamado assim que a aplicação abrir

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((resultado)=> resultado.json())//Transformando dados da API em JSON
      .then((json)=> {//Chamando essa JSON
        setNutri(json);//Mandando a json para dentro da setNutri
      });
    }

    loadApi();//Assim que abrir a página, irá ser chamada essa function

  }, []);

  return(
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((post)=> {//Percorrendo o useState por item
        return(
          <article key={post.id} className="post">
            <strong className="title">{post.titulo}</strong>
            <img src={post.capa} alt={post.titulo} className='photo'></img>
            <p className='subtitle'>{post.subtitulo}</p>
            <a className='button'>Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

//Precisa exportar esse componente.
//Assim vai conseguir ser acessado por outros arquivos.
export default App;
