import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'; // Assuming the helper function is in the 'utils' folder

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      alert('Invalid email address!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending the data to a server)
    // You can access the form data using the 'name', 'email', and 'message' variables
    // Reset the form fields after submission if needed
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="text-center mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" value={name} onChange={handleNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="form-control" value={message} onChange={handleMessageChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
