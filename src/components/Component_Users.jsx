// En los parametros de la funcion tambien podemos poner lo siguiente
// Component_Users({nombre,apellido,edad}) o simplemente 
// Component_Users(props)
// Ya que props se comporta como un objeto

export function Component_Users(props) {
  return (
    <div>
      <h2 style={{color: 'red'}}>Uso de props</h2>
      <h4 style={{color: 'blue'}}>Datos:</h4>
      <p>Nombre: {props.nombre}</p>
      <p>Apellido: {props.apellido}</p>
      <p>Edad: {props.edad}</p>

      <h4 style={{color: 'blue'}}>Direccion:</h4>
      <p>Calle: {props.direccion.calle}</p>
      <p>Ciudad: {props.direccion.ciudad}</p>
    </div>
  )
}
