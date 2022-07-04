import { useEffect, useState } from "react"
import next from "../../assets/next.svg"
import previous from "../../assets/previous.svg"
import Loader from "../Loader/Loader"



const Carrousel = ({galeria, name}) => {
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState("100%")
  const [indexImg, setIndexImg] = useState(0)

  useEffect(() => {  
    const interval = setInterval(() => {      
      if (indexImg === galeria.length - 1 ) {
        setVisible("0%")
        setTimeout(() => {
          setIndexImg(0) 
          setVisible("100%")          
        }, 500);
      } else {
        setVisible("0%")
        setTimeout(() => {
          setIndexImg(indexImg + 1) 
          setVisible("100%")         
        }, 500);
      }
    }, 3000);
    return () => clearInterval(interval)
  // eslint-disable-next-line
  }, [indexImg])

  const handleLoad = () => {
    setLoading(false);    
  }
  
  const handleNext = () => {
    if (indexImg === galeria.length - 1 ) {
      setVisible("0%")
      setTimeout(() => {
        setIndexImg(0)
        setVisible("100%")
      }, 500);
    } else {
      setVisible("0%")
      setTimeout(() => {
        setIndexImg(indexImg + 1)
        setVisible("100%")
      }, 500);
    } 
  }

  const handlePrevious = () => {
    if (indexImg === 0) {
      setVisible("0%")
      setTimeout(() => {
        setIndexImg(galeria.length - 1)
        setVisible("100%")
      }, 500);
    } else {
      setVisible("0%")
      setTimeout(() => {
        setIndexImg(indexImg - 1)
        setVisible("100%")
      }, 500);
    }
  }

  return (
    <div className="carrouselContainer col-12 row">
      <div className="col-12 row imgContainer">        
        <img className="galeryImg col-4" src={`/Images/${name}/${galeria[0].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-2" src={`/Images/${name}/${galeria[1].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-2" src={`/Images/${name}/${galeria[2].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-4" src={`/Images/${name}/${galeria[3].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-6" src={`/Images/${name}/${galeria[4].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[5].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[6].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[7].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-4" src={`/Images/${name}/${galeria[8].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-5" src={`/Images/${name}/${galeria[9].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-4" src={`/Images/${name}/${galeria[10].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[11].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-2" src={`/Images/${name}/${galeria[12].src}`} alt="preload" style={{display: "none"}}/>
        <img className="galeryImg col-3" src={`/Images/${name}/${galeria[13].src}`} alt="preload" style={{display: "none"}} onLoad={handleLoad}/>
      </div>

      {loading 
      ?
       <Loader/>
      :
        <>
          <img className="previous" height={16} src={previous} alt="previous" onClick={handlePrevious}/> 
          <img className="next" height={16} src={next} alt="next"  onClick={handleNext}/>        
          <img style={{opacity: visible}} className="carrouseleImg col-12" src={`/Images/${name}/${galeria[indexImg].src}`} alt={galeria[indexImg].alt} />
        </>
      }      
    </div>
  )
}

export default Carrousel