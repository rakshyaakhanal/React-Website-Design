import React, { useState } from 'react';
import Logo from '../../Images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import { FaBars } from 'react-icons/fa6';
import { MdOutlineClose } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
            <div className='container'>
                <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt='Nav Logo' />
                </Link>

                <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ' '}
                                        onClick={() => setIsNavShowing(prev => !prev)}> {name} </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className='nav-toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar;