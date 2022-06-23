import { send } from "emailjs-com";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = ({placeholder, name, label, foo}) => { 
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input required placeholder={placeholder} className="userInput py-1 ps-1 col-12 mb-3" type="text" name={name} id={name} onChange={foo}></input>
    </>
  )
}

const Contacto = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",    
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
    <div>
      <div className="titulo col-12 col-md-8 mx-auto">
        <h1>CONTACTANOS</h1>
      </div>
      <div className="col-11 col-md-8 mb-3 mx-auto">
        <p className="mb-0">Tenés dudas sobre lo que querés hacer o sobre el proceso de trabajo?</p>
        <p>Déjanos tus datos y nos ponemos en contacto para asesorarte en todo lo necesario.</p>
      </div>      
      <form className="formulario col-12 col-md-8" onSubmit={sendData}>
        <legend className="mb-2"><strong>Formulario de Contacto</strong></legend>        
        <Input placeholder="Nombre" name="nombre" label="Nombre" foo={handleInputChange}/>        
        <Input placeholder="Apellido" name="apellido" label="Apellido" foo={handleInputChange}/>
        <Input placeholder="Telefono (sin guiones, sin 0 y sin 15)" name="telefono" label="Telefono" foo={handleInputChange}/>
        <Input placeholder="E-mail" name="email" label="Email" foo={handleInputChange}/> 
        <Input placeholder="Dejanos un Mensaje" name="descripcion" label="Dejanos un mensaje" foo={handleInputChange}/> 

        {nombreRegex.test(user.name) && apellidoRegex.test(user.apellido) && telefonoRegex.test(user.telefono) && emailRegex.test(user.email) && user.descripcion
          ?<button className="col-2 enviarBtn" type="submit">Enviar</button>        
          :<button className="col-2 enviarBtnDesabilitado" disabled type="submit">Enviar</button>
        }        
        
      </form>        
    </div>

  )
}

export default Contacto