import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav>
            <div className="navbar-logo">
                <img
                    src="./logo.png"
                    alt="Budget Booking Logo"
                    className='logo'
                />
            </div>
            
            <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/tour">Tours</NavLink>
                </li>
               
                <li>
                    <NavLink to="/testimonials">Testimonials</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>



        </nav>
    )
}

export default Navbar
