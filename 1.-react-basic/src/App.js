import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>

        <section>
          <Componente msg="Hola soy un componente de funcion"/>
          <hr />
          <Propiedades 
            cadena="Esto es una cadena de Texto"
            numero={19}
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{nombre:"Jon", correo:"jmolina2624@gmail.com"}}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento de React</i>}
            componenteReact={<Componente msg="Soy un Componente pasado como Prop" />}
          />
          <hr />
          <Estado />
          <hr/>
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr/>
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
        </section>
      </header>
    </div>
  );
}

export default App;