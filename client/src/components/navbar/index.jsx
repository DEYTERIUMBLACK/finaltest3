import React from 'react'
import '../../assets/grid.css'
import './style.css'
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
      <p className='logo'>Tasty</p>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Specialities</li>
        <li>Reservation</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
      </div>
    </div>
  )
}

export default Navbar