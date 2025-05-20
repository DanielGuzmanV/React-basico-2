import "./CardStyle.css"

function Card({estado}) {
  return (
    <div className="card">
      <h1>Primer Card</h1>
      <p>Detalles de card</p>
      <p className={estado? "on" : "off"}>
        Estado de Card</p>
    </div>
  )
}
export default Card;





