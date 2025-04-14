import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [companyEmail, setCompanyEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/employees/forgot-password', {
        companyEmail,
      });

      setMessage(res.data.message);
      setCompanyEmail('');
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }
  };
  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <input
          type="email"
          placeholder="Enter your company email"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && (
        <div className="success-message">
        <p>{message}</p>
        <p>Check your company inbox: <strong>{companyEmail}</strong></p>
      </div>
)}
      {error && <p className="error-message">{error}</p>}
    </div>
  );  
};

// ✅ Correct export here
export default ForgotPassword;
