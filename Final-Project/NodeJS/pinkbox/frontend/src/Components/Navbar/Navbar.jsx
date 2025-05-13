import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

console.log("Navbar.jsx");

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='nav'>
      <Link to='/' onClick={()=>{setMenu("shop")}} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>pinkBOX</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>All</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("animation")}}><Link to='/animation' style={{ textDecoration: 'none' }}>Animation</Link>{menu==="animation"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("drama")}}><Link to='/drama' style={{ textDecoration: 'none' }}>Drama</Link>{menu==="drama"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("action")}}><Link to='/action' style={{ textDecoration: 'none' }}>Action</Link>{menu==="action"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("comedy")}}><Link to='/comedy' style={{ textDecoration: 'none' }}>Comedy</Link>{menu==="comedy"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("horror")}}><Link to='/horror' style={{ textDecoration: 'none' }}>Horror</Link>{menu==="horror"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("romance")}}><Link to='/romance' style={{ textDecoration: 'none' }}>Romance</Link>{menu==="romance"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("fantasy")}}><Link to='/fantasy' style={{ textDecoration: 'none' }}>Fantasy</Link>{menu==="fantasy"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mystery")}}><Link to='/mystery' style={{ textDecoration: 'none' }}>Mystery</Link>{menu==="mystery"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
