import "./header.css"
import NavBar from "../Navbar/NavBar"
import logo from "../../assets/Logo_Picante_chico.png"
import { Link } from "react-router-dom"



const Header = () => {
  return (
    <div className="headerContainer justify-content-between d-flex">
      <Link to="/">
        <img src={logo} alt="logo" height="50" className="my-2"></img>
      </Link>
      <NavBar/>
    </div>
  )
}

export default Header