import React, { useState } from 'react';
import Chart from '../assets/chart.png';
import Current from '../assets/current.png';
import './DashboardPage.css';

const DashboardPage = () => {

  const studentData = {
    name: 'Oswald Amoah',
    id: '11046928',
    email: 'okamoah003@st.ug.edu.gh',
    level: '400',
    mobileNumber: '+23354385283',
    citizenship: 'GH',
  };

  // Sample data for grades
  const gradesData = {
    'MATH 122': '-',
    'DCIT 201': '-',
    'DCIT 402': '-',
  };

  // State for managing notifications
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Student Information */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1' }} >
          <h2 className='dashboard-title'>Student Information</h2>
          <ul className='dashboard-body'>
            <li><strong>Name:</strong> {studentData.name}</li>
            <li><strong>ID:</strong> {studentData.id}</li>
            <li><strong>Email:</strong> {studentData.email}</li>
            <li><strong>Level:</strong> {studentData.level}</li>
            <li><strong>Mobile Number:</strong> {studentData.mobileNumber}</li>
            <li><strong>Citizenship:</strong> {studentData.citizenship}</li>
          </ul>
        </div>

        {/* Notifications Button */}
        <div className='dashboard-button-contents'>
          <button onClick={() => setShowNotifications(true)} className='dashboard-button' height="2px">Notifications</button>

          {/* Notifications Menu */}
          {showNotifications && (
            <div>
              <h3 className='dashboard-button-title'>Notifications</h3>
              <ul className='dashboard-button-body'>
                {Object.entries(gradesData)
                  .filter(([course, grade]) => grade === '-')
                  .map(([course, grade]) => (
                    <li key={course}>Missing: {course}</li>
                  ))}
              </ul>
              <button onClick={() => setShowNotifications(false)} className='dashboard-button2'>Close</button>
            </div>
          )}
        </div>
       
      </div>
     

                    
      {/* Grades Overview */}
      <div>
        <h2 className='dashboard-title'>Grades Overview</h2>
        <ul className='dashboard-body'>
          <a href="/grade-report">
            <img className='DashboardBannerImage' src={Chart} alt="Landing Page Banner"  />
          </a>
          
        </ul>
                    <br />
        <h3 className='dashboard-title2'>Current Grades</h3>
        <a href={Current} target='0'>
        <ul className='dashboard-body2'>
        
          <img className='CurrentGradesImage' src={Current} alt="Current Grades Image"  height={350}/>
          </ul>
          </a>
      </div>
    </div>
  );
};

export default DashboardPage;
