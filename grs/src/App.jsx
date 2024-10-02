
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpAndSupportPage from './components/HelpAndSupportPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header1 />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header3 />
              <LoginPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Header2 />
              <div className='parent-container'>
              <Sidebar />
              <DashboardPage />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/grade-report"
          element={
            <>
              <Header2 />
              <div className='parent-container'>
              <Sidebar />
              <GradeReportPage />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/missing-grade-form"
          element={
            <>
              <Header2 />
              <div className='parent-container'>
              <Sidebar />
              <MissingGradeFormPage />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/instructor-contact"
          element={
            <>
              <Header2 />
              <div className='parent-container'>
              <Sidebar />
              <InstructorContactPage />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/help-and-support"
          element={
            <>
              <Header2 />
              <div className='parent-container'>
              <Sidebar />
              <HelpAndSupportPage />
              </div>
              <Footer />
            </>
          }
        />
      
      </Routes>
    </Router>
  );
};

export default App;
