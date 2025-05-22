import { useEffect, useState } from "react"
import "./CardStyle.css"

function Prueba_Hooks() {

  // Aumentar y decrementar likes:
  const [likes, setLikes] = useState(0);
  const darLikes = () => {
    setLikes(likes + 1);
  }
  useEffect(darLikes, [])
  
  const quitarLikes = () => {
    if(likes === 0) return;
    setLikes(likes - 1);
  }
  useEffect(quitarLikes, [])
  // ==================================
  
  // Cambiar tema:
  const [temas, setTema] = useState(false);
  const cambiarTema = () => {
    setTema(temas? false : true);
  }
  useEffect(cambiarTema, [])


  return (
    <div className={temas? 'on': 'off'}>
      <h2>Likes {likes}</h2>
      {/* Aumentar likes: */}
      <button onClick={darLikes}>
        Dar likes
      </button>

      {/* Disminuir likes: */}
      <button onClick={quitarLikes}>
        Quitar likes
      </button>
      <hr/>
      <br/>

      {/* Cambiar temas: */}
      <button onClick={cambiarTema}>
        Cambiar tema
      </button>

    </div>
  )
}

export default Prueba_Hooks







