
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    
    <aside className="sidebar-container">
      <div className="trigger" />
      <nav>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''} id='sidebar-link'>
          Dashboard
        </Link>
        <br />
        <Link to="/grade-report" className={location.pathname === '/grade-report' ? 'active' : ''}>
          Grade Report
        </Link>
        <br />
        <Link to="/missing-grade-form" className={location.pathname === '/missing-grade-form' ? 'active' : ''}>
          Missing Grade Form
        </Link>
        <br />
        <Link to="/instructor-contact" className={location.pathname === '/instructor-contact' ? 'active' : ''}>
          Instructor Contact
        </Link>
        <br />
        <Link to="/help-and-support" className={location.pathname === '/help-and-support' ? 'active' : ''}>
          Help & Support
        </Link>
        <br />
  
      </nav>
    </aside>
    
  );
};


export default Sidebar;
