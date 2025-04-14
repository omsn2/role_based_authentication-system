// import React, { useState } from 'react';
// import axios from 'axios';
// // If your logo is in public folder: use "/logo.png"
// // If your logo is in src/assets: import it like below:
// import logo from '../assets/digital-blanket-logo.png'; // adjust path as needed

// const EmployeeRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     manager_name: '',
//     department: '',
//     joining_date: '',
//     employment_type: 'Permanent',
//     vendor_name: '',
//     role:'',
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/employees/register', formData);
//       setMessage(`✅ ${res.data.message}. Code: ${res.data.employee_code}`);
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       setMessage(`❌ Failed to register: ${err.response?.data?.message || 'Server error'}`);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Company Logo */}
//       <div style={styles.logoContainer}>
//         <img src={logo} alt="Digital Blanket Logo" style={styles.logo} />
//       </div>

//       <h2>Admin - Register Employee</h2>

//       <form onSubmit={handleSubmit} style={styles.form}>
//         {[
//           { name: 'first_name', type: 'text', placeholder: 'First Name' },
//           { name: 'last_name', type: 'text', placeholder: 'Last Name' },
//           { name: 'email', type: 'email', placeholder: 'Email' },
//           { name: 'manager_name', type: 'text', placeholder: 'Manager Name' },
//           { name: 'department', type: 'text', placeholder: 'Department (e.g., HR, IT)' },
//           { name: 'joining_date', type: 'date', placeholder: 'Joining Date' },
//           { name: 'role', type: 'text', placeholder: 'role' },
//         ].map(({ name, type, placeholder }) => (
//           <input key={name} name={name} type={type} placeholder={placeholder} onChange={handleChange} required style={styles.input} />
//         ))}

//         <select name="employment_type" onChange={handleChange} value={formData.employment_type} style={styles.input}>
//           <option value="Permanent">Permanent</option>
//           <option value="Contractual">Contractual</option>
//           <option value="Temporary">Temporary</option>
//         </select>

//         {formData.employment_type === 'Contractual' && (
//           <input type="text" name="vendor_name" placeholder="Vendor Name" required onChange={handleChange} style={styles.input} />
//         )}

//         <button type="submit" style={styles.button}>Register</button>
//       </form>

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// const styles = {
//   container: { maxWidth: '600px', margin: '0 auto', padding: '2rem', textAlign: 'center' },
//   logoContainer: { marginBottom: '1rem' },
//   logo: { height: '80px', objectFit: 'contain' },
//   form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' },
//   input: { padding: '0.6rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' },
//   button: { padding: '0.7rem', fontSize: '1rem', borderRadius: '8px', backgroundColor: '#007bff', color: 'white', border: 'none' },
// };

// export default EmployeeRegistrationForm;



// src/components/EmployeeRegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/digital-blanket-logo.png';

const EmployeeRegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    manager_name: '',
    department: '',
    joining_date: '',
    employment_type: 'Permanent',
    vendor_name: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/employees/register', formData);
      alert(`✅ ${res.data.message}. Code: ${res.data.employee_code}`);
      // Optionally clear form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        manager_name: '',
        department: '',
        joining_date: '',
        employment_type: 'Permanent',
        vendor_name: '',
        role: '',
      });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(`❌ Failed to register: ${err.response?.data?.message || 'Server error'}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Digital Blanket Logo" style={styles.logo} />
      </div>

      <h2>Admin - Register Employee</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          { name: 'first_name', type: 'text', placeholder: 'First Name' },
          { name: 'last_name', type: 'text', placeholder: 'Last Name' },
          { name: 'email', type: 'email', placeholder: 'Email' },
          { name: 'manager_name', type: 'text', placeholder: 'Manager Name' },
          { name: 'department', type: 'text', placeholder: 'Department (e.g., HR, IT)' },
          { name: 'joining_date', type: 'date', placeholder: 'Joining Date' },
          { name: 'role', type: 'text', placeholder: 'Role' },
        ].map(({ name, type, placeholder }) => (
          <input
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={formData[name]}
            required
            style={styles.input}
          />
        ))}

        <select
          name="employment_type"
          onChange={handleChange}
          value={formData.employment_type}
          style={styles.input}
        >
          <option value="Permanent">Permanent</option>
          <option value="Contractual">Contractual</option>
          <option value="Temporary">Temporary</option>
        </select>

        {formData.employment_type === 'Contractual' && (
          <input
            type="text"
            name="vendor_name"
            placeholder="Vendor Name"
            required
            onChange={handleChange}
            value={formData.vendor_name}
            style={styles.input}
          />
        )}

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: '600px', margin: '0 auto', padding: '2rem', textAlign: 'center' },
  logoContainer: { marginBottom: '1rem' },
  logo: { height: '80px', objectFit: 'contain' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' },
  input: { padding: '0.6rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' },
  button: {
    padding: '0.7rem',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default EmployeeRegistrationForm;

