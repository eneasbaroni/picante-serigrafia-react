import "./navBar.css"
import hamburger from "../../assets/hamburger.svg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const NavItem = ({page}) => {
  return (
    <Link to={`/${page}`} className="navItem">{`${page.toUpperCase()}`}</Link>
  )
}

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)  
      setNavbarOpen(false)    
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])


  return (   
    
    <ul className="navbarContainer container-fluid justify-content-end">
      
      {windowSize < 768 &&
      <div className="hamburger">
        <img className="hamburgerIcon" height={16} src={hamburger} alt="hamburger" onClick={() => setNavbarOpen(!navbarOpen)}/>        
      </div>}
      {navbarOpen === false & windowSize < 768
        ? <></>
        : 
        <>
          <NavItem page="home"/>             
          <NavItem page="galeria"/>             
          <NavItem page="presupuesto"/>             
          <NavItem page="feria"/>             
          <NavItem page="nosotros"/>             
          <NavItem page="contacto"/> 
        </>
      }
      
    </ul>  
  )
}

export default NavBar