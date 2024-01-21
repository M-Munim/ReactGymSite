import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
// links is named export 
import { links } from '../data'
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

import './Navbar.css'
const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)
    return (
        <nav>
            <div className="container nav_container">
                <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={logo} alt="NavLogo" />
                </Link>

                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar