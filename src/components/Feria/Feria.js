import "./feria.css"
import dataBase from "./database"
import SubGaleria from "../SubGaleria/SubGaleria"
import { useEffect, useState } from "react"
import Carrousel from "../SubGaleria/Carrousel"
import { Link } from "react-router-dom"

const Feria = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth) 
    }
    window.addEventListener("resize", handleResize);
    /* handleResize();  */ 
    return () => window.removeEventListener("resize", handleResize);
  }, [])


  return (
    <div>
      <div className="row">
        <div className="col-12 titulo feriaTitulo">
          <h1 className="pt-1 pt-md-3 pb-2 pb-md-4 mb-2">FERIA<div>PICANTE</div></h1>                        
          <p className="mb-0">La Feria Picante es una feria que hacemos dos veces al año. Donde invitamos a diferentes artistas y emprendedores a participar, para que puedan exponer sus trabajos y puedan a darse a conocer.</p>
          <p className="m-0">Además, en la feria, contamos con la performance de diferentes artistas, como así también muestras en vivo de como son los procesos de serigrafía.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 my-3">
          <p>TE MOSTRAMOS LO QUE FUE LA ULTIMA FERIA PICANTE</p> 
        </div>
      </div>
      {(windowSize > 768 
        ?<SubGaleria galeria={dataBase.feria} name={"feria"}/>
        :<Carrousel galeria={dataBase.feria} name={"feria"}/>)
      }  
      
      <div className="justify-contect-center row">
        <Link to={`/feria-formulario`}><div className="feriaBtn col-4 text-center">¿Queres ser parte de la proxima feria?</div></Link>
      </div>
         
    </div>
  )
}

export default Feria