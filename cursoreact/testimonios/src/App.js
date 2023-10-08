import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estás son las mejores salas para tu casa</h1>
        <Testimonio 
          nombre='Sala'
          pais='Navidad'
          imagen='3'
          cargo='Para'
          empresa='Casa'
          testimonio='Lo más nuevo para tu casa y para tu familia, no dejes pasar esta gran oportunidad, ya no habrá otra igual'
        />
        <Testimonio 
          nombre='Sala'
          pais='cuando quieras'
          imagen='1'
          cargo='Para'
          empresa='Casa'
          testimonio='Disfruta de esta experiencia y pága todo lo que tengas, esa será la mejor compra de tu vida'
        />
        <Testimonio 
          nombre='Sala'
          pais='cuando se te hinche'
          imagen='7'
          cargo='Para'
          empresa='Casa'
          testimonio='Ya no sé que más poner pero esta mrda está muy interesante. Espero no seguir estudiando más por hoy, ya que me estoy estresando.'
        />
      </div>
    </div>
  );
}

export default App;
