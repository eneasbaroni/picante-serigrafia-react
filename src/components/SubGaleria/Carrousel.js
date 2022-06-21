import { useEffect, useState } from "react"
import next from "../../assets/next.svg"
import previous from "../../assets/previous.svg"



const Carrousel = ({galeria, name}) => {
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
      
      <img className="previous" height={16} src={previous} alt="previous" onClick={handlePrevious}/> 
      <img className="next" height={16} src={next} alt="next"  onClick={handleNext}/>        
      <img style={{opacity: visible}} className="carrouselImg col-12" src={`/Images/${name}/${galeria[indexImg].src}`} alt={galeria[indexImg].alt} />
    </div>
  )
}

export default Carrousel