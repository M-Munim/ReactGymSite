import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
// links is named export 
import { links } from '../data'
// import { GoThreeBars } from 'react-icons/go'
import { FaBars } from "react-icons/fa6";

import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="container nav_container">
                <Link to='/'>
                    <img src={logo} alt="NavLogo" />
                </Link>

                <ul className="nav_links">
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className="nav_toggle-btn">
                <FaBars />
                </button>
            </div>
        </nav>
    )
}

export default Navbar