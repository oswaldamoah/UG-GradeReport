import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpAndSupportPage.css';

const HelpAndSupportPage = () => {
  // State for contact form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', { name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2 className='help-title'>Help and Support</h2>

      {/* FAQ Section */}
      <section className='help-body'>
        <h3>FAQs: Grade Reporting</h3>
        <ul>
  <li><strong>Q:</strong> Can I view my grades for previous semesters?</li>
  <p><strong>A:</strong> Yes, you can view your grades for previous semesters by selecting the desired semester from the dropdown menu in the <Link to="/grade-report">Grade Report Page</Link> of this site.</p>
    <br />
  <li><strong>Q:</strong> How often are grades updated?</li>
  <p><strong>A:</strong> Grades are typically updated by instructors at the end of each assignment, exam, or evaluation period. However, the frequency may vary, so it's advisable to check regularly for the latest updates.</p>
  <br />
  <li><strong>Q:</strong> What should I do if I believe there is an error in my grade or it's missing?</li>
  <p><strong>A:</strong> If you believe there is an error in your grade, please fill the <Link to="/missing-grade-form">Missing Grade Form</Link>. Provide them with the necessary details and supporting documentation for a prompt resolution.</p>
  <br />
  <li><strong>Q:</strong> Is there  a simple way I can communicate my instructor?</li>
  <p><strong>A:</strong> Yes, you can do that in the <Link to="/instructor-contact">Instructor Contact Page</Link>.Click on your instructor's name in the table and then, scroll down to fill your details.</p>
  <br />
</ul>

      </section>

      {/* Contact Form for Technical Support */}
      <section className='help-body'>
        <h3>Contact Technical Support</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
        <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        <br />
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>

          <button type="submit">Submit</button>
        </form>
        <br />
          <br />
          <br />
          <br />
        
      </section>
    </div>
    

  );
};

export default HelpAndSupportPage;
