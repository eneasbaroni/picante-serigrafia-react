import "./nosotros.css"

const Nosotros = () => {
  return (
    <div className="nosotrosContainer col-12 mt-3 row">
      <div className="col-12 col-md-6 my-3">
        <img src="../Images/Eve_02.jpg" alt="Imagen Personal"/>
      </div>
      <div className="col-12 col-md-6 my-3 titulo nosotrosTexto">
        <h1>EQUIPO <div>PICANTE</div></h1>
        <p className="mt-2"> Hola, mi nombre es EVE, tengo 27 años y soy de la ciudad de Córdoba, Argentina. Estudié diseño en la UNC, y hace más de tres años que llevo adelante este hermoso proyecto. Proyecto que me apasiona y en el cual paso cada día aprendiendo y creciendo.</p>
        <p>Picante no podría existir si fuese solo por mí, detrás de Picante hay un sinfín de personas que aportan y ayudan a darle forma a esta realidad. Desde amigos que visitan el taller y aportan ayudando en diferentes tareas, hasta profesionales con los que realizamos diferentes proyectos artísticos.</p>
        <p>Desde Picante creemos que la calidad y la originalidad lo son todo. Por eso, desde el día que abrimos nuestras puertas, usamos materia prima de primera calidad y elaboramos nuestros productos de manera artesanal, logrando proyectos únicos.</p>
      </div>

    </div>
  )
}

export default Nosotros