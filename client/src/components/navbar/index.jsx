import React, { useState, useEffect } from 'react';
import '../../assets/grid.css';
import './style.css';

const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="salam">  
      <div className={`navbar ${scrollNavbar ? 'scrollnavbar' : ''}`}>
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
  );
};

export default Navbar;
