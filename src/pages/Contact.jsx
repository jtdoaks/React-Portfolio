import { useState } from 'react';
import { validateName, validateEmail } from '../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();


    if (!validateEmail(email)) {
      setErrorMessage('Email  is invalid');

    
     } else if (!validateName(name)) {
      setErrorMessage('Name  is invalid');

      return;
    } 




    setName('');
    setEmail('');
    setMessage('');
  };



  return (
    <div>
      <h1>Contact Page</h1>
      <div className="container text-center">
        
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />

          <button type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
