import { useState } from "react"


const SubGaleria = ({galeria, name}) => {
  const [imgGrande, setImgGrande] = useState(false)
  const [imgGrandeSrc, setImgGrandeSrc] = useState("")
  const [visible, setVisible] = useState("0%")

  const handleClick = (e) => {
    console.log(e.target)
    setImgGrandeSrc(e.target.src)
    setImgGrande(true);
    setTimeout(() => {
    setVisible("100%")}, 1);
  }

  const offImgGrande = () => {
    setVisible("0%")
    setTimeout(() => {
    setImgGrande(false)}, 500);
  }

  return (  
    <div className="row">
      <div className="col-12 row imgContainer">        
        <img className="galeryImg col-4" src={`/Images/${name}/${galeria[0].src}`} alt={galeria[0].alt} onClick={handleClick}/>
        <img className="galeryImg col-2" src={`/Images/${name}/${galeria[1].src}`} alt={galeria[1].alt} onClick={handleClick}/>
        <img className="galeryImg col-2" src={`/Images/${name}/${galeria[2].src}`} alt={galeria[2].alt} onClick={handleClick}/>
        <img className="galeryImg col-4" src={`/Images/${name}/${galeria[3].src}`} alt={galeria[3].alt} onClick={handleClick}/>
        <img className="galeryImg col-6" src={`/Images/${name}/${galeria[4].src}`} alt={galeria[4].alt} onClick={handleClick}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[5].src}`} alt={galeria[5].alt} onClick={handleClick}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[6].src}`} alt={galeria[6].alt} onClick={handleClick}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[7].src}`} alt={galeria[7].alt} onClick={handleClick}/>
        <img className="galeryImg col-4" src={`/Images/${name}/${galeria[8].src}`} alt={galeria[8].alt} onClick={handleClick}/>
        <img className="galeryImg col-5" src={`/Images/${name}/${galeria[9].src}`} alt={galeria[9].alt} onClick={handleClick}/>
        <img className="galeryImg col-4" src={`/Images/${name}/${galeria[10].src}`} alt={galeria[10].alt} onClick={handleClick}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[11].src}`} alt={galeria[11].alt} onClick={handleClick}/>
        <img className="galeryImg col-2" src={`/Images/${name}/${galeria[12].src}`} alt={galeria[12].alt} onClick={handleClick}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[13].src}`} alt={galeria[13].alt} onClick={handleClick}/>
      </div>

      {imgGrande &&
        <div className="col-12 row imgGrandeContainer" style={{opacity: visible}}>
          <img className="imgGrande col-12"  src={imgGrandeSrc} alt="imgGrande" onClick={offImgGrande}/>
        </div> 
      }

      
    </div> 
  )    

}

export default SubGaleria