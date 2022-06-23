import { send } from "emailjs-com"
import { useState } from "react"
import { useNavigate} from "react-router-dom";
import "./presupuesto.css"




const Input = ({placeholder, name, label, foo}) => { 
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input required placeholder={placeholder} className="userInput py-1 ps-1 col-12 mb-3" type="text" name={name} id={name} onChange={foo}></input>
    </>
  )
}

const Presupuesto = () => {
  let navigate = useNavigate();
  

  const [user, setUser] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",
    soporte:"",
    medida:"",
    cantidadColores:"",
    cantidad:"",
    descripcion:"",
  })  

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }  

  // Expresiones regulares para los campos del formulario
  const nombreRegex = /^[\s\S]{2,25}$/i
  const apellidoRegex = /^[\s\S]{2,25}$/i // eslint-disable-next-line
  const telefonoRegex = /^[\+]?[0-9]{3,20}$/im // eslint-disable-next-line
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i 

  

  const sendData = (e) => {
    e.preventDefault();    
    send(
      //los keys de emailJS https://www.emailjs.com/
      process.env.REACT_APP_JS_SERVICE_ID,
      process.env.REACT_APP_JS_TEMPLATE_ID,
      user,
      process.env.REACT_APP_JS_USER_ID 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      navigate("/success")
    })
    .catch((err) => {
      
      console.log('FAILED...', err);
    });
  }


  return (
    <div className="divContainer">
      <div className="titulo formCabecera col-12 col-md-8 my-3">
        <h1>PRESUPUESTO</h1>
        <p>Para que podamos hacerte un correcto presupuesto, necesitamos que nos completes el formulario a continuación. Luego de que nos envíes el formulario nos pondremos en contacto para aclarar dudas y enviarte el presupuesto</p>
      </div>
      <form className="formulario col-12 col-md-8" onSubmit={sendData}>
        <legend className="mb-2"><strong>Formulario de Presupuesto</strong></legend>        
        <Input placeholder="Nombre" name="nombre" label="Nombre" foo={handleInputChange}/>        
        <Input placeholder="Apellido" name="apellido" label="Apellido" foo={handleInputChange}/>
        <Input placeholder="Telefono (sin guiones, sin 0 y sin 15)" name="telefono" label="Telefono" foo={handleInputChange}/>
        <Input placeholder="E-mail" name="email" label="Email" foo={handleInputChange}/> 
        <label htmlFor="soporte">Soporte de Trabajo</label>
            <select className="form-control mb-3" name="soporte" id="soporte" onChange={handleInputChange}>
            <option>Papel</option>
            <option>Tela</option>
            <option>Acrilico</option>                        
            </select>
        <Input placeholder="Especificá la medida en cm" name="medida" label="Medida del Trabajo" foo={handleInputChange}/> 
        <Input placeholder="Especificá la cantidad de colores (máximo 5)" name="cantidadColores" label="Cantidad de Colores" foo={handleInputChange}/> 
        <Input placeholder="Especificá la cantidad de copias a realizar" name="cantidad" label="Cantidad de Copias" foo={handleInputChange}/> 
        <Input placeholder="Agregá una breve descripción del trabajo a realizar" name="descripcion" label="Breve Descripción" foo={handleInputChange}/> 

        {nombreRegex.test(user.name) && apellidoRegex.test(user.apellido) && telefonoRegex.test(user.telefono) && emailRegex.test(user.email) && user.soporte && user.medida && user.cantidad && user.descripcion
          ?<button className="col-2 enviarBtn" type="submit">Enviar</button>        
          :<button className="col-2 enviarBtnDesabilitado" disabled type="submit">Enviar</button>
        }        
        
      </form>
      
    </div>
  )
}

export default Presupuesto