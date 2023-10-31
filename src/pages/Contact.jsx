import React, { useState } from 'react';

function ContactPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'subject') {
      setSubject(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // You can implement your validation functions (validateEmail, validateName) here
    // and set the error message accordingly.

    if (!email || !name || !subject || !message) {
      setErrorMessage('Please fill out all fields.');
    } else {
      setErrorMessage(''); // Clear any previous error messages
      // Your form submission logic goes here
      console.log('Form submitted:', { name, email, subject, message });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div>
      {/* <h1>Contact Me</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleInputChange} />
        <br />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleInputChange} />
        <br />

        <label>Subject:</label>
        <input type="text" name="subject" value={subject} onChange={handleInputChange} />
        <br />

        <label>Message:</label>
        <textarea name="message" rows="5" value={message} onChange={handleInputChange}></textarea>
        <br />

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>} */}

      <div>
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:jtdportfolio@gmail.com">jtdportfolio@gmail.com</a></p>
        <p>Pittsburgh, PA, United States</p>
        <p>Seeking Full-Time Employment</p>
        <p> Email - Weekdays 9am-5pm</p> 
        <p> Phone or Zoom - Thursday and Friday 9am-5pm</p>
        <p>Thank you for visiting my portfolio! I appreciate your time and interest in my work. If you have any questions or would like to get in touch, please don't hesitate to reach out. I look forward to connecting with you</p>
      </div>

      <div>
        <h2>Social Media</h2>
        <a href="https://linkedin.com/in/john-doaks">LinkedIn</a>
        <br />
        <a href="https://github.com/jtdoaks">GitHub</a>
      </div>
    </div>
  );
}

export default ContactPage;
