import React, { useState } from 'react';
import axios from 'axios';
const SignUpForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users/createUser",formData)
    // Perform actions with form data (e.g., send to server)
    console.log('Form submitted with data:', formData);
  };

  // Styles
  const formStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '500px',
    margin: 'auto',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#ff4d30',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#ff4d30',
    },
  };

  return (
    <div style={{display:'flex', justifyContent:"center", height:"100vh", verticalAlign:'middle'}}>
    <form style={formStyle} onSubmit={handleSubmit}>
      <label style={labelStyle}>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </label>
      <br />

      <label style={labelStyle}>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </label>
      <br />

      <label style={labelStyle}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </label>
      <br />

      <label style={labelStyle}>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </label>
      <br />

      <button type="submit" onClick={()=>handleSubmit}style={buttonStyle}>
        Sign Up
      </button>
    </form>
    </div>
  );
};

export default SignUpForm;
