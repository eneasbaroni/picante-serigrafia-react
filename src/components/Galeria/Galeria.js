import "./galeria.css"
import GaleriaSelectorPapel from "./GaleriaSelectorPapel"
import GaleriaSelectorTela from "./GaleriaSelectorTela"

const Galeria = () => {
  return (
    <div className="divContainer container-fluid justify-content-center ">
      <div className="row justify-content-around "> 
      <GaleriaSelectorPapel/>
      <GaleriaSelectorTela/>
      
      </div>
    </div> 
  )
}

export default Galeria