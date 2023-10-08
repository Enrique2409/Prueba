import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        style={{ width: '500px', height: '350px' }} 
        src={require(`../imagenes/cambg_${props.imagen}.jpg`)}
          alt='Imagen de sala'/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
        <strong>{props.nombre}</strong> para {props.pais}</p>
        <p className="cargo-testimonio">
        {props.cargo} tu <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">
        "{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;