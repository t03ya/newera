import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}><NavLink to='/profile'
                className={({ isActive }) => (isActive ? c.activeLink : '???')}>Profile</NavLink></div>
            <div className={c.item}><NavLink to='/dialogs' className={({ isActive }) => (isActive ? c.activeLink : '???')}>Messages</NavLink> </div>
            <div className={c.item}><a>News</a></div>
            <div className={c.item}><a>Music</a></div>
        </nav>
    )
}

export default Navbar;