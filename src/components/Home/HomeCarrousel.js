import { useEffect, useState } from "react";


const HomeCarrousel = () => {
  const [indexImg, setIndexImg] = useState(0)
  const [visible, setVisible] = useState(1)
  
  const imgagesCarrousel = [
    "./Images/Fondo_Indexb.jpg",
    "./Images/Fondo_Indexc.jpg",
    "./Images/Fondo_Indexd.jpg"
  ]

  useEffect(() => {  
    const interval = setInterval(() => {      
      if (indexImg === imgagesCarrousel.length - 1 ) {
        setVisible(0)
        setTimeout(() => {
          setIndexImg(0) 
          setVisible(1)          
        }, 500);
      } else {
        setVisible(0)
        setTimeout(() => {
          setIndexImg(indexImg + 1) 
          setVisible(1)         
        }, 500);
      }
    }, 3000);
    return () => clearInterval(interval)
  // eslint-disable-next-line
  }, [indexImg]) 

  return (
    <div className="carrouselContainer row">
      <img style={{opacity: visible}} className=" carrouselImg col-12 " src={imgagesCarrousel[indexImg]} alt="carrouselImagen"/>
    </div>
  )
}

export default HomeCarrousel