import "./presupuesto.css"




const Input = ({placeholder, name, foo}) => { 
  return (
    <input required placeholder={placeholder} className="userInput py-1 ps-1 col-12 mb-3" type="text" name={name} id={name} onChange={foo}></input>
  )
}

const Presupuesto = () => {
  return (
    <div>
      <div className="formCabecera col-12 col-md-8 my-3">
        <h1>PRESUPUESTO</h1>
        <p>Para que podamos hacerte un correcto presupuesto, necesitamos que nos completes el formulario a continuación. Luego de que nos envíes el formulario nos pondremos en contacto para aclarar dudas y enviarte el presupuesto</p>
      </div>
      <form className="formulario col-12 col-md-8" /* onSubmit={sendData} */>
        <legend className="mb-2"><strong>Formulario de Presupuesto</strong></legend>
        <label htmlFor="name">Nombre</label>
        <Input placeholder="Nombre" name="nombre" /* foo={handleInputChange} *//>
        <label htmlFor="apellido">Apelldo</label>
        <Input placeholder="Apellido" name="apellido" /* foo={handleInputChange} *//>
        <Input placeholder="Telefono (sin guiones, sin 0 y sin 15)" name="telefono" /* foo={handleInputChange} *//>
        <Input placeholder="E-mail" name="email" /* foo={handleInputChange} *//> 
        <button className="col-12 terminarCompra" type="submit">Enviar</button>        
        
      </form>
      {/* <form className="col-12 col-md-8  justify-content-center formulario" action="" method="POST">
                        <legend><strong>Formulario de Presupuesto</strong></legend>                    
                        <div className="form-group">
                            <label htmlFor="name">Nombre y Apelldo</label>
                            <input type="text" className="form-control" name="nombre" id="name" placeholder="Ingresá Nombre y Apellido" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="tel">Teléfono</label>
                            <input type="text" className="form-control" name="telefono" id="tel" placeholder="Ingresá tu num. de tel." required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="ejemplo@ejemplo.com" required/>                        
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="soporte">Soporte de Trabajo</label>
                            <select className="form-control" name="soporte" id="soporte">
                            <option>Papel</option>
                            <option>Tela</option>
                            <option>Acrilico</option>                        
                            </select>
                        </div> 
                        <div className="form-group mt-2">
                            <label htmlFor="medida">Medida del Trabajo</label>
                            <input type="text" className="form-control" name="medida" id="medida" placeholder="Especificá la medida en cm"/>
                        </div>                  

                        <div className="form-group mt-2">
                            <label htmlFor="cantcol">Cantidad de Colores</label>                        
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="cantidadColores" id="inlineRadio1" value="option1"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="cantidadColores" id="inlineRadio2" value="option2"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="cantidadColores" id="inlineRadio3" value="option3"/>
                            <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="cantidadColores" id="inlineRadio4" value="option4"/>
                            <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlfor="cantidad">Cantidad de Copias</label>
                            <input type="text" className="form-control" name="cantidad" id="cantidad" placeholder="Especificá la cantidad de copias a realizar"/>
                        </div>     
                        <div className="form-group mt-3">
                            <label htmlFor="archivo">Adjunta la imagen a trabajar</label>
                            <div>
                                <input type="file" className="form-control-file" name="imagen" id="archivo"/>
                            </div>
                        </div>         
                        <div className="form-group mt-3">
                            <label htmlFor="descripcion">Breve Descripción</label>
                            <textarea className="form-control" name="descripcion" id="descripcion" rows="3" placeholder="Agregá una breve descripción del trabajo a realizar."></textarea>
                        </div>
                        
                        <div className="formulario__botones mt-2 mb-2">
                            <input type="submit" value="Enviar" className="p-1"/> 
                            <input type="reset" value="Reset" className="p-1"/>
                        </div> 
                    </form> */} 
    </div>
  )
}

export default Presupuesto