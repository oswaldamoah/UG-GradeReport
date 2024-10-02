import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ugLogo.png';

const Header1 = () => {
  return (
    <header>
      <div className='HeaderItems'>
        <Link to="/">
          <img src={logo} alt="Logo" height={55} />
        </Link>
        <nav>
          <Link to="/login" className="login-button">
            LOGIN
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header1;
