import React from 'react';
import Banner from '../assets/LPageBanner.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <body>
      <br />
    <div className="landing-page">
      <div className="banner-container">
        <div className="banner-content">
          <img className='BannerImage' src={Banner} alt="Landing Page Banner"  height={300}/>
          <h1 className="banner-title">UG Grade Reporting System</h1>
          <p className="banner-overview">Track your academic journey with the UG Grade Reporting System! Easily access grades, report missing ones, and stay informed.   Don't let missing grades hold you back!</p>
          <br />
          <div className='banner-content'>
          <Link to="/login" className="login-button">
            LOGIN
          </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
    </body>
  );
};

export default LandingPage;