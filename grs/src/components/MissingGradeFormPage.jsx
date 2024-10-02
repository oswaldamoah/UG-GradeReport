import React, { useState } from 'react';
import './MissingGradeFormPage.css';

const MissingGradeFormPage = () => {
  const [fullName, setFullName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [currentLevel, setCurrentLevel] = useState('');
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', {
      fullName,
      studentID,
      studentEmail,
      currentLevel,
      courseName,
      instructorName,
      expectedGrade,
      explanation,
    });


    // Reset form fields after submission
    setFullName('');
    setStudentID('');
    setStudentEmail('');
    setCurrentLevel('');
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');

    // Display confirmation message in window
    window.alert("Thanks for filling out the form! We will get back to you shortly.");
  };


  return (
    <body>
      <div className="grade-report-page">
        <h2 className="missing-grade-title">Missing Grade Form</h2>

        <form className="missing-grade-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text"  value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </label>

          <label>
            Student ID:
            <input type="text" placeholder="11039483" pattern="^[0-9]{8}$" value={studentID} onChange={(e) => setStudentID(e.target.value)} required />
          </label>

          <label>
            Student Email:
            <input type="email" pattern="[a-zA-Z0-9]+@st\.ug\.edu\.gh" placeholder='koadjei@st.ug.edu.gh' value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} required />
          </label>

          <label>
            Current Level: <br />
            <select  value={currentLevel} onChange={(e) => setCurrentLevel(e.target.value)} required>
              <option value="">Select</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
          </label>

          <label>
            Course Name with Course ID:
            <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
          </label>

          <label>
            Course Instructor:
            <input type="text" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} required />
          </label>

          <label>
            Expected Grade:
            <input type="text" placeholder="B+" pattern="[A-F][+]?" value={expectedGrade} onChange={(e) => setExpectedGrade(e.target.value)} required />
          </label>

          <label>
            Explanation:
            <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} required />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </body>
  );
};

export default MissingGradeFormPage;
