import './App.css';
import medicalLogo from './imagenes/logo-medical.png';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';
import ListDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="app-tareas">
      <div className='medical-logo-contenedor'>
        <img 
          src={medicalLogo}
          className='medical-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <ListDeTareas />
      </div>
    </div>
  );
}

export default App;
