import React from 'react';
import NavbarImg from '../images/brandName.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='brand-name'>
      <img className='brand-name' src={NavbarImg} alt='Brand Name' />
    </div>
  );
};

export default Navbar;
