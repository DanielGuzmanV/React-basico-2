import "./CardStyle.css"

const pokemosArr = [
  {
    id: 1,
    nombre: "bulbasaur",
    imagen: "https://i.ibb.co/6cWZPcWw/pngwing-com.png",
    descripcion: "Pokemon de tipo planta/veneno introducido en la primera generacion",
  },

  {
    id: 2,
    nombre: "charmander",
    imagen: "https://i.ibb.co/nq1vWwLw/pngwing-com-2.png",
    descripcion: "Pokemon de tipo fuego introducido en la primera generacion",
  },

  {
    id: 3,
    nombre: "pikachu",
    imagen: "https://i.ibb.co/7xHdLdf0/pngwing-com-1.png",
    descripcion: "Pokemon de tipo electrico introducido en la primera generacion",
  },

]

export function Card_Array() {
  return (
    pokemosArr.map( (items, idx) => {
      return (
        <div className="card" key={idx}>
          <h1>{items.nombre}</h1>
          <img className="imagen" src={items.imagen} alt="Imagen_de_pokemones"/>
          <p>{items.descripcion}</p>
        </div>
      )
    })
  )
}







