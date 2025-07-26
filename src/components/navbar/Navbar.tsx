import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{padding:'15px',background:"light-green",display:'flex',justifyContent:"center",gap:'20px'}}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/store">Store</NavLink>
    </div>
  )
}

export default Navbar