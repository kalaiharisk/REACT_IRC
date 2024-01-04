import React, { useState } from 'react';
import './Login.css'
const LoginForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // State to manage form errors
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    let formIsValid = true;
    const newErrors = { ...errors };

    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      formIsValid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      formIsValid = false;
    }

    // If form is valid, you can proceed with further actions like API call
    if (formIsValid) {
      // Perform your login logic here
      console.log('Form submitted:', formData);
    } else {
      // Update the errors state for displaying error messages
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="email                                                                                                                 "
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <div className="error">{errors.username}</div>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div className="error">{errors.password}</div>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
