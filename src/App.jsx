import './App.css';
import Card from './components/Card';
import { Card_Array } from './components/Card_Array';
import Component_Coffe from './components/Component_Coffe';
import {Component_Users} from './components/Component_Users';
import Prueba_Hooks from './components/Prueba_Hooks';

function App() {
  return (
    <div className="App">
      {/* Componentes comentados: */}
      {/* <Component_Coffe/> */}
      {/* < Component_Users 
        nombre = 'Marcelo'
        apellido = 'Garcia'
        edad = {23}
        direccion = { {
          calle: 'San martin',
          ciudad: 'Buenos vientos',
          numero: 2345
        } }
      /> */}
      {/* ======================================== */}


      {/* Componente "Card con estilos" comentado*/}
      {/* <Card estado = {true}/> */}
      {/* ======================================== */}

      {/* Componente "Card con array" comentado */}
      {/* < Card_Array/> */}
      {/* ======================================== */}

      < Prueba_Hooks/>

    </div>
  );
}

export default App;
