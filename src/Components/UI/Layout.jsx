import { Outlet, NavLink, } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  
   
    return <nav className="nav-list">
        <ul>
            <li>
                <NavLink to="/" className="nav-link">Home</NavLink>

            </li>
            <li>
                <NavLink to="/Sell"className="nav-link">Sell</NavLink>

            </li>
            <li>
                <NavLink to="/buy"className="nav-link">Buy</NavLink>

            </li>
        
            <li>
            <NavLink to='/LogOut' className="nav-link">
                LogOut
            </NavLink>
        </li>
        
                 
                  
            
        </ul>
    </nav>
  

}
export default Layout;