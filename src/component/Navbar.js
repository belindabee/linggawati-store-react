import React, { Component } from "react";
import {Link} from 'react-router-dom';
import kayumanis from '../component/asset/kayumanis.png'

class Navbar extends Component {
    render() {
        return (
         <nav className="navbar navbar-expand-sm  bg-dark navbar-dark px-sm">
             {/* 
             https://www/iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported);
             https://www/iconfinder.com/Makoto_msk
             */}
             <Link to='/'>
                <img src={kayumanis} alt='store' className='navbar-brand' width='30'/>
             </Link>
             <ul className="navbar-nav align-items-center">
             <li classname="nav-item ml-5">
                 <Link to="/" className="nav-link">
                     products
                 </Link>
             </li>
             </ul>
             <Link to="/cart" clasName="ml-auto">
                 <button>
                 <i class="fas fa-shopping-cart"/>
                     my cart
                 </button>
             </Link>
         </nav>
        )
    }
}
export default Navbar;