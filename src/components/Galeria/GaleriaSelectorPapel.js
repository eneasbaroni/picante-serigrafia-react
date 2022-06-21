import { useState } from "react"
import { Link } from "react-router-dom"

const urlPapel = "./Images/P07c.jpg"
const urlPapelHover = "./Images/P07.jpg"


const GaleriaSelectorPapel = () => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }
  

  return (
    <div className="pt-3 pe-2 col-12 col-md-6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hover
        ? <Link to={`/galeria/papel`} ><div className="galeriaSeleccion" style={{backgroundImage: `url(${urlPapel})`}} ><p> TRABAJOS </p> <p> EN </p> <p className="bold">PAPEL</p> </div>   </Link>
        : <Link to={`/galeria/papel`}><div className="galeriaSeleccion" style={{backgroundImage: `url(${urlPapelHover})`}}>  <p>TRABAJOS </p> <p> EN </p> <p className="bold">PAPEL</p> </div></Link> 
      }
    </div>
    
  )
}

export default GaleriaSelectorPapel 