import { NavLink } from "react-router-dom";

export default function Navbar(){

  function active({ isActive }){
    return isActive ? 'active-link': ''
  }

  return (
    <div>
      <nav>
        <div>
          <NavLink 
            className={active}
            to="/">Home</NavLink>
          <br/>
          <NavLink 
            className={active}
            to="/about">About</NavLink>
        </div>
      </nav>
      
    </div>
  )
}