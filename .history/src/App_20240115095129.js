import React, { useState } from 'react';
import './App.css';
import './custom.css';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    npiNumber: '',
    businessAddress: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add further validation or submit the data to the backend here
    console.log('Form Data:', formData);

    // Assuming the form is successfully submitted to the backend
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2>Health Care Provider Registration</h2>
      {submitted ? (
        <p className="success-message">Details submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            NPI Number:
            <input
              type="text"
              name="npiNumber"
              value={formData.npiNumber}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Business Address:
            <input
              type="text"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Telephone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email Address:
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;