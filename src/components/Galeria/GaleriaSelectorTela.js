import { useState } from "react"
import { Link } from "react-router-dom"

const urlTela = "./Images/T12c.jpg"
const urlTelaHover = "./Images/T12.jpg" 

const GaleriaSelectorTela = () => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  

  return (
    <div className="pt-3 ps-2 col-12 col-md-6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hover
        ? <Link to={`/galeria/tela`} ><div className="galeriaSeleccion" style={{backgroundImage: `url(${urlTela})`}} ><p> TRABAJOS </p> <p> EN </p> <p className="bold">TELA</p></div></Link>
        : <Link to={`/galeria/tela`}><div className="galeriaSeleccion" style={{backgroundImage: `url(${urlTelaHover})`}}>  <p>TRABAJOS </p> <p> EN </p> <p className="bold">TELA</p></div></Link>
      }
    </div>
    
  )
}

export default GaleriaSelectorTela