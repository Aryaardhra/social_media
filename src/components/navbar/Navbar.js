import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active nav-link">
        <NavLink to="/facebook">FB_LOGIN </NavLink>
        </li>
        <li className="nav-item active nav-link">
        <NavLink to="/linkedin">LINKEDIN</NavLink>
        </li> 
      </ul>
    </div>
  </nav>
    </>
  )
}