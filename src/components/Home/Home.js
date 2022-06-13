import "./home.css"
import HomeCarrousel from "./HomeCarrousel"

const Home = () => {
  return (
    <div className="homeContainer container-fluid">
       <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start mainText">
              <h1 className="mb-3">BIENVENIDOS A <div>PICANTE</div></h1>            
              <p>Picante es un taller de serigrafía que apunta a los diseños y proyectos únicos, singulares y puros.</p>             
              <p>Además también funcionamos como una pequeña marca de indumentaria y accesorios con estilo único con estampados hechos con serigrafía. </p>
              <p>Queremos salir de lo común, explorar otros caminos, ser diferentes.</p>
              <p>Te invitamos que nos sigas por nuestras fanpages para estar siempre al tanto de nuestras nuevas creaciones para conocer nuestras prendas</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end" id="logo">
              <img src="./Images/Logo_Picante.png" alt="Logo Picante"  width="90%"/>
          </div>
      </div>
      <HomeCarrousel/>
    </div>
  )
}

export default Home