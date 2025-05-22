import './App.css';
import Card from './components/Card';
import { Card_Array } from './components/Card_Array';
import Component_Coffe from './components/Component_Coffe';
import {Component_Users} from './components/Component_Users';

function App() {
  return (
    <div className="App">
      {/* Comentamos los otros componentes: */}
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
      
      {/* Componente "Card" comentado*/}
      {/* <Card estado = {true}/> */}

      < Card_Array/>
    </div>
  );
}

export default App;
