import './App.css';
import Card from './components/Card';
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
      
      {/* Probamos el componente "Card" */}
      <Card estado = {true}/>
    </div>
  );
}

export default App;
