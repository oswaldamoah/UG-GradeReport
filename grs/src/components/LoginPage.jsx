import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((studentID === '11046928' && pin === '23557') || (studentID === 'admin' && pin === 'admin1234')) {
      setAuthenticated(true);
      navigate('/dashboard');
    } else {
      alert('Invalid student ID or PIN. Please try again.');
    }
  };

  return (
    <div>
      <h2 className='banner-title'>LOGIN</h2>
      <form onSubmit={handleSubmit} className='banner-content' style={{ marginBottom: '80px', textAlign: 'center' }}>
        <label>
          Student ID:
          <input type="text" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
        </label>
        <br />
        <label>
          PIN:
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
        </label>
        <br />
        <button type="submit" className='banner-content' style={{ width: '150px', margin: '20px auto' }}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
