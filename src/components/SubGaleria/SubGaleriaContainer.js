import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SubGaleria from "./SubGaleria";
import "./subGaleria.css"
import dataBase from "./database"
import Carrousel from "./Carrousel";

const getGalery = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(dataBase) 
  }, 500);
});


const SubGaleriaContainer = () => {  
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [galeria, setGaleria] = useState([])
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  let navigate = useNavigate(); 

  let path = useParams();
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth) 
    }
    window.addEventListener("resize", handleResize);
    /* handleResize();  */ 
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect (() => { 
    
    getGalery.then (data => {  
      setLoading(true);      
      let datos = data; 
      

      if (path.galery === "papel") {
        setGaleria(datos.papel)
        setName("papel")
        setLoading(false);
      } else if (path.galery === "tela") {
        setGaleria(datos.tela)
        setName("tela")
        setLoading(false);
      }           
       
    })
  },[path]);

  const volverAGaleria = () => navigate(-1); 



  return (
    <>
    {loading
      ?<h1>cargando.....</h1>
      :(windowSize > 768 
        ?<SubGaleria galeria={galeria} name={name}/>
        :<Carrousel galeria={galeria} name={name}/>)
    }
    <div className="botonVolver col-12 text-center" onClick={volverAGaleria}>Volver A Galería</div>
  </>
    
  )
}

export default SubGaleriaContainer