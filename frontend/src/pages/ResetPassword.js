import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyEmail: '',
    tempPassword: '',
    newPassword: '',
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!validatePassword(form.newPassword)) {
      setError(
        "Password must be 8-16 characters, include at least one uppercase letter, one number, and one special character."
      );
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/employees/reset-password', form);
      setMessage(res.data.message);
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Reset Your Password</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="companyEmail"
          placeholder="Enter Company Email"
          value={form.companyEmail}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="tempPassword"
          placeholder="Enter Temporary Password"
          value={form.tempPassword}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="newPassword"
          placeholder="Enter New Password"
          value={form.newPassword}
          onChange={handleChange}
          required
          style={styles.input}
          pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,16}$"
          title="Password must be 8-16 characters, include one uppercase letter, one number, and one special character"
        />
        <button type="submit" style={styles.button}>Set New Password</button>
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: '500px', margin: '0 auto', padding: '2rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.7rem',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ResetPassword;
