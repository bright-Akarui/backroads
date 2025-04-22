import React from 'react';
import logo from '../images/logo.svg';
import {NavbarData,NavbarSocial} from './NavbarData';
const navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
        <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
            </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links" id="nav-links">
            {NavbarData.map((link)=>{
                return <li key={link.id}>
                    <a href={link.href} className='nav-link'>
                        {link.text}
                    </a>
                </li>
            })}
        </ul>
        <ul className="nav-icons">
            {NavbarSocial.map((link)=>{
                return <li key={link.id}>
                    <a href={link.href} target='_blank' rel='noreferrer' className='nav-con'>
                    </a>
                    <i className={link.icon}></i>
                </li>
            })}
        </ul>
        </div>
    </nav>
  )
}

export default navbar
