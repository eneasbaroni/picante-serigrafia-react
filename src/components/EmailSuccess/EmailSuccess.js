import "./emailSuccess.css"
import { Link } from "react-router-dom"

const EmailSuccess = () => {
  return (
    <div className="successContainer col-12 text-center">
      <img src="./Images/Logo_Picante.png" alt="Logo Picante" className="my-5" height={300}/>
      <h2 className="text-center">MENSAJE ENVIADO </h2>
      <p className="text-center">Nos estaremos comunicando con vos a la brevedad!!!</p>
      <Link to={`/`}><div className="botonVolver">Volver a Home</div></Link> 
    </div>
  )
}

export default EmailSuccess