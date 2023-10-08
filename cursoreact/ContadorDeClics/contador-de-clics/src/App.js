import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import medicalLogo from './imagenes/Logo-medical.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1); 
  }

  const reinicarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='medical-logo'
          src={medicalLogo}
          alt='Logo de medical'
        /> 
      </div>
      <div className='contenedor-principal'>
      <Contador numClics= {numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reinicarContador}
        />
      </div>
    </div>
  );
}

export default App;
