import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

// Menu Active Style____________
const navbarMenuActiveStyle = {
    color: '#999',
}



const Header = () => {
    // Responsive Navbar Menu Condition_____________
    const [menuRes, setMenuRes] = useState(false);
    const onClickResponsiveMenu = () => {
        setMenuRes(true)
    }
    const {user, logOut} = useAuth()
    
    return (
        <div className="bg-yellow-900 z-10 py-3 fixed w-full left-0 top-0">
            <div className="container mx-auto px-3 h-8 flex items-center justify-between">
                <div className="h-8">
                    <Link to="/">
                        <img className="h-full" src="https://i.ibb.co/yNmkGnm/logo-dark.png" alt="" />
                    </Link>
                </div>
                <div id={menuRes ? "responsive-menus" : "responsive-menus-no-toggle"}>
                    <ul className="flex items-center" >
                        <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/home">Home</NavLink>
                        <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" to="/aboutUs">About</NavLink>
                        {
                            user.email ? 
                             <div className="menue">
                                <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/addService">Add Service</NavLink>
                                <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/myOrder">My Orders</NavLink>
                                <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8 py-2" activeStyle={navbarMenuActiveStyle} to="/allOrderManage">All Orders Manage</NavLink>
                                <button className="text-yellow-50 hover:text-yellow-900 bg-yellow-900 hover:bg-yellow-50 font-bold border-2 border-yellow-50 py-2 px-8 mx-3 smooth-animation" onClick={logOut}>Logout</button>
                                <button className="text-white px-2 py-2">{user.email? user.displayName : ''}</button> 
                             </div> 
                           :
                           <div className="menue">
                                <NavLink className="menu-link text-white text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/login">Login</NavLink>
                            </div>
                        }
                    </ul>
                </div>
                <span onClick={()=>setMenuRes(!menuRes)} className="menu-handle "><i className={menuRes ? "fas fa-times text-white smooth-animation" : "fas fa-bars text-white smooth-animation"}></i></span>
            </div>
        </div>
    );
};

export default Header;