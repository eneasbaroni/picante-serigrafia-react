import { useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../Loader/Loader"

const urlPapel = "./Images/P07c.jpg"
const urlPapelHover = "./Images/P07.jpg"


const GaleriaSelectorPapel = () => {
  const [loading, setLoading] = useState(true)
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  const handleLoad = () => {
    setLoading(false);
  
  }

  

  return (
    <>
       <img className="preload col-12" src={`./Images/P07c.jpg`} alt="preload" style={{display: "none"}} />
       <img className="preload col-12" src={`./Images/P07.jpg`} alt="preload" style={{display: "none"}} onLoad={handleLoad}/>

      {loading
      ? <Loader/>
      : <div className="pt-3 pe-2 col-12 col-md-6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {hover
            ? <Link to={`/galeria/papel`} ><div className="galeriaSeleccion" style={{backgroundImage: `url(${urlPapelHover})`}} ><p> TRABAJOS </p> <p> EN </p> <p className="bold">PAPEL</p> </div>   </Link>
            : <Link to={`/galeria/papel`}><div className="galeriaSeleccion" style={{backgroundImage: `url(${urlPapel})`}}>  <p>TRABAJOS </p> <p> EN </p> <p className="bold">PAPEL</p> </div></Link> 
          }
        </div>
     
      }
    </>
    
  )
}

export default GaleriaSelectorPapel 