import React, { useState } from 'react';
import './InstructorContactPage.css';

const InstructorContactPage = () => {
  const instructors = [
    { id: 1, name: 'Mark Atta Mensah', email: 'mamensah008@st.ug.edu.gh' },
    { id: 2, name: 'Michael Agbo Soli', email: 'matsoli@st.ug.edu.gh' },
    { id: 3, name: 'Paul Nii Tackie', email: 'pntammah@st.ug.edu.gh' },
    { id: 4, name: 'Aziz Dwumfuor', email: 'adwumfour@ug.edu.gh' },
  ];

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const sendEmail = () => {
    if (selectedInstructor && studentName && studentEmail && emailBody) {
      const emailContent = `Dear ${selectedInstructor.name},\n\n${emailBody}\n\nBest regards,\n${studentName}\n${studentEmail}`;
      alert(`Email Sent:\n\n${emailContent}`);
    }
  };

  return (
    <div className='instructor-body'>
      <h2 className='instructor-title'>Instructor Contact Page</h2>

      {/* Table of instructors with their respective contact */}
      <div className="instructor-table-container">
        <table className="instructor-table">
          <thead>
            <tr>
              <th>Instructor Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor) => (
              <tr key={instructor.id} onClick={() => setSelectedInstructor(instructor)}>
                {/* The above line pastes the instructor name clicked on in the table into the email form */}
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   

      {/* Email Section */}
      <div className="email-form-container">
        <h3>E-mail Your Instructor</h3>
        <div className="email-form">
          <label htmlFor="selectedInstructor">Select an Instructor:</label>
          <select
            id="selectedInstructor"
            value={selectedInstructor ? selectedInstructor.id : ''}
            onChange={(e) => {
              const selectedId = parseInt(e.target.value, 10);
              const instructor = instructors.find((i) => i.id === selectedId);
              setSelectedInstructor(instructor);
            }}
          >
            <option value="">Select an Instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
            ))}
          </select>

          <div>
            <label htmlFor="studentName">Your Name:</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="studentEmail">Your Email:</label>
            <input 
              type="email" 
              pattern="[a-zA-Z0-9]+@st\.ug\.edu\.gh"
              placeholder='koadjei@st.ug.edu.gh'
              id="studentEmail"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="emailBody">Email Body:</label>
            <textarea
              id="emailBody"
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
            />
          </div>

          <button onClick={sendEmail} disabled={!selectedInstructor || !studentName || !studentEmail || !emailBody}>
            Send Email
          </button>
          <br />
          <br />
          <br />
          <br />

        </div>
      </div>
    </div>
  );
};

export default InstructorContactPage;
