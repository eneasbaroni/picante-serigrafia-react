import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";


const HomeCarrousel = () => {
  const [loading, setLoading] = useState(true)
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

  const handleLoad = () => {
    setLoading(false);    
  }

  return (
    <div className="carrouselContainer mt-5 row">
      <img style={{display: "none"}} className=" carrouselImg col-12 " src={imgagesCarrousel[0]} alt="preload"/>
      <img style={{display: "none"}} className=" carrouselImg col-12 " src={imgagesCarrousel[1]} alt="preload"/>
      <img style={{display: "none"}} className=" carrouselImg col-12 " src={imgagesCarrousel[2]} alt="preload" onLoad={handleLoad}/>

      {loading 
        ?
          <Loader/>
        :
          <img style={{opacity: visible}} className=" carrouselImg col-12 " src={imgagesCarrousel[indexImg]} alt="carrouselImagen"/>
      }
    </div>
  )
}

export default HomeCarrousel