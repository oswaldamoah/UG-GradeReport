import React, { useState } from 'react';
import './GradeReportPage.css';
import pdf from '../assets/gradeReport.pdf';

const GradeReportPage = () => {
  const reportData = {
    'LEVEL 100': {
      'First Semester': [
        { code: 'UGRC 150', name: 'Critical Thinking and Practical Reasoning', grade: 'A' },
        { code: 'MATH 121', name: 'Algebra and Trigonometry', grade: 'C+' },
        { code: 'MATH 123', name: 'Vectors and Geometry', grade: 'B' },
        { code: 'DCIT 101', name: 'Introduction to Computer Science', grade: 'C' },
        { code: 'DCIT 103', name: 'Office Productivity Tools', grade: 'C+' },
        { code: 'STAT 111', name: 'Introduction to Statistics and Probability I', grade: 'B' },
        { gpa:'2.77' },
      ],
      
      'Second Semester': [
        { code: 'UGRC 110', name: 'Academic Writing I', grade: 'B' },
        { code: 'MATH 122', name: 'Calculus I', grade: '-' },
        { code: 'MATH 126', name: 'Algebra and Geometry', grade: 'B' },
        { code: 'STAT 112', name: 'Introduction to Statistics and Probability II', grade: 'E' },
        { code: 'DCIT 104', name: 'Programming', grade: 'A' },
        { code: 'DCIT 102', name: 'Computer Hardware Fund. and Circuits', grade: 'A' },
        { gpa:'2.88' },
      ],
      
    },
    'LEVEL 200': {
      'First Semester': [
        { code: 'UGRC 210', name: 'Academic Writing II', grade: 'F' },
        { code: 'DCIT 201', name: 'Programming I', grade: '-' },
        { code: 'DCIT 203', name: 'Digital and Logic Systems Design', grade: 'B' },
        { code: 'DCIT 205', name: 'Multi Media and Web Design', grade: 'A' },
        { code: 'DCIT 207', name: 'Computer Architecture & Organisation', grade: 'C+' },
        { code: 'MATH 223', name: 'Calculus II', grade: 'A' },
        { gpa: '2.43'},
      ],
      
      'Second Semester': [
        { code: 'UGRC 220', name: 'Introduction to African Studies', grade: 'A' },
        { code: 'DCIT 202', name: 'Mobile Application Development', grade: 'B+' },
        { code: 'DCIT 204', name: 'Data Structures & Algorithm I', grade: 'C' },
        { code: 'DCIT 206', name: 'Systems Administration', grade: 'F' },
        { code: 'DCIT 208', name: 'Software Engineering', grade: 'B' },
        { code: 'DCIT 212', name: 'Numerical and Computational Methods', grade: 'B' },
        {gpa:'2.55'},
      ],
    },
    
    'LEVEL 300': {
      'First Semester': [
        { code: 'DCIT 301', name: 'Operating Systems', grade: 'A' },
        { code: 'DCIT 303', name: 'Computer Networks', grade: 'B' },
        { code: 'DCIT 305', name: 'Database Fundamentals', grade: 'A' },
        { code: 'DCIT 313', name: 'Introduction to Artificial Intelligence', grade: 'B+' },
        { code: 'MATH 359', name: 'Discrete Mathematics', grade: 'C+' },
        { code: 'DCIT 307', name: 'Mini-Project', grade: 'A' },
        { code: 'DCIT 309', name: 'Embedded Systems and IoT', grade: 'N/A' },
        { code: 'DCIT 311', name: 'Machine Learning', grade: 'B' },
        {gpa:'2.43'},
      ],
    
      'Second Semester': [
        { code: 'DCIT 400', name: 'Project', grade: 'A+' },
        { code: 'DCIT 401', name: 'Social, Legal, Ethical and Professional Issues', grade: 'B+' },
        { code: 'DCIT 407', name: 'Image Processing', grade: 'C' },
        { code: 'DCIT 306', name: 'Cloud Computing Numerical', grade: 'A' },
        { code: 'DCIT 316', name: 'Computational models for Social Media Mining', grade: 'B' },
        {gpa:'2.55'},
      ],
    },

    'LEVEL 400': {
      'First Semester': [
        { code: 'DCIT 400', name: 'Project', grade: 'A' },
        { code: 'DCIT 401', name: 'Social, Legal, Ethical and Professional Issues', grade: 'B' },
        { code: 'DCIT 407', name: 'Image Processing', grade: 'A' },
        { code: 'DCIT 403', name: 'Designing Intelligent Agents', grade: 'B+' },
        { code: 'DCIT 405', name: 'Statistical Models and Methods for Data Science', grade: 'D' },
        { code: 'DCIT 411', name: 'Bioinformatics', grade: 'N/A' },
        { code: 'DCIT 417', name: 'Network Performance Analysis and Modeling', grade: 'N/A' },
        { code: 'DCIT 423', name: 'Network Servers and Infrastructure', grade: 'E' },
        {gpa:'3.09'},
      ],
    
      'Second Semester': [
        { code: 'DCIT 400', name: 'Project', grade: 'A+' },
        { code: 'DCIT 402', name: 'Management Principles in Computing', grade: '-' },
        { code: 'DCIT 418', name: 'Systems and Network Security', grade: 'C+' },
        { code: 'DCIT 428', name: 'Wireless Systems and Networks', grade: 'A' },
        { code: 'DCIT 404', name: 'Advanced Databases', grade: 'A' },
        { code: 'DCIT 406', name: 'Advanced Computer Networks', grade: 'N/A' },
        { code: 'DCIT 408', name: 'Compilers', grade: 'N/A' },
        { code: 'DCIT 426', name: 'Telecommunication Systems', grade: 'C+' },
        { code: 'DCIT 412', name: 'Computer Vision', grade: 'A' },
        { code: 'DCIT 414', name: 'Data Mining and Warehousing', grade: 'A' },
        { code: 'DCIT 416', name: 'Digital Signal Processing', grade: 'N/A' },
        { code: 'DCIT 422', name: 'Information Visualization', grade: 'C+' },
        {gpa:'3.26'},
      ],
    },
    
    
  };


  const [selectedLevel, setSelectedLevel] = useState('LEVEL 100');
  const [selectedSemester, setSelectedSemester] = useState('First Semester');

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  return (
    <div className="grade-report-page">
      <h2 className="grade-title">Grade Report</h2>

      <div className='grade-body'>
      <p>Student Name: Oswald Amoah</p>
      <p>Student ID: 11046928</p>
      <p><strong>Overall GPA:</strong> 2.80</p> 
      

      <label>
        Select Level:
        <select value={selectedLevel} onChange={handleLevelChange}>
          <option value="LEVEL 100">LEVEL 100</option>
          <option value="LEVEL 200">LEVEL 200</option>
          <option value="LEVEL 300">LEVEL 300</option>
          <option value="LEVEL 400">LEVEL 400</option>
        </select>
      </label>
    <br />
    <br />
      <label>
        Select Semester:
        <select value={selectedSemester} onChange={handleSemesterChange}>
          <option value="First Semester">First Semester</option>
          <option value="Second Semester">Second Semester</option>
        </select>
      </label>

      <table className="grade-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {reportData[selectedLevel][selectedSemester].map((course) => (
            <tr key={course.code}>
              <td>{course.code}</td>
              <td>{course.name}</td>
              <td>{course.grade}</td>
            </tr>
            
          ))}
          <br />
          <p><strong>Semester GPA:</strong></p>
          {reportData[selectedLevel][selectedSemester].map((course) => (
            
              <p> {course.gpa}</p>
              ))}
        </tbody>
      </table>
      <br />
    <h3>Note: </h3>
        <p>Please note that some grades are marked as '-' indicate either missing or unspecified grades, and grades marked as 'N/A' indicate unregistered electives.</p>
        <br />
    </div>

    
    <button className='grade-button'> 
        <a href={pdf} target="_blank" rel="noreferrer" >
          Print to Pdf
        </a>
      </button>
    </div>
  );
};

export default GradeReportPage;
