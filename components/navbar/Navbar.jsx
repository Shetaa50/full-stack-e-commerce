import React, { useState } from "react";
import { Link } from 'react-router-dom';
import'./Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
const Navbar = ()=>{
    const [menu,setMenu] = useState("Shop")
    return(
        <div className="nav">
            <div className="nav-logo">
            <img src={logo}alt="" /> 
            <p>E-commerce</p>
           </div>
           <ul className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to = '/'>Shop</Link>  {menu==='Shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}  to ='/men'> men</Link>{menu==='men'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to ='/women'>women</Link>{menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to ='/kids'>kids</Link>{menu==='kids '?<hr/>:<></>}</li>
           </ul>
            <div className="nav-login-cart">
               <Link to ='/login'><button>Login</button></Link> 
                <Link to = '/Cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
            
        </div>
    )
}
export default Navbar;