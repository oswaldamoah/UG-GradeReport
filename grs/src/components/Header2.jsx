import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ugLogo.png'; 

const Header2 = () => {
  return (
    <header>
      <div className='HeaderItems'>
      <Link to="/">
        <img src={logo} alt="Logo"  height={55}/>
      </Link>
      <nav>
      <Link to="/" className="login-button">
            LOGOUT
          </Link>
      </nav>
      </div>
    </header>
  );
};

export default Header2;
