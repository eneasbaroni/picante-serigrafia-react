import facebookIcon from "../../assets/facebook_icon.svg"
import whatsappIcon from "../../assets/whatsapp_icon.svg"
import instagramIcon from "../../assets/instagram_icon.svg"
import locationIcon from "../../assets/location_icon.svg"
import "./footer.css"




const Footer = () => {
  return (
    <div className="footer row text-center">
      <div className="col-12">
        <a href="https://www.instagram.com/picante.serigrafia/" rel="noreferrer" target="_blank"> <img className="footerIcons mt-2" src={instagramIcon} alt="instagram"/> </a>
        <a href="https://www.facebook.com/picante.serigrafia/" rel="noreferrer" target="_blank"> <img className="footerIcons mt-2" src={facebookIcon} alt="facebook"/>   </a> 
      </div>
      <div className="col-12 d-flex justify-content-center aling-items-center">
        <a href="https://wa.me/+5493516558094" rel="noreferrer" target="_blank"><img className="footerMiniIcons" height={16} src={whatsappIcon} alt="whatsapp"/></a>
        <p className="px-2">3516558094</p>                      
      </div>
      <div className="col-12 d-flex justify-content-center aling-items-center mb-1">        
        <img className="footerMiniIcons" height={16} src={locationIcon} alt="location"/>          
        <p className="px-2">Augusto López 429, Córdoba, Argentina</p>   
      </div>
        
      
      
    </div>
  )
}

export default Footer