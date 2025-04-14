import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const [managerName, setManagerName] = useState('Manager');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Simulate fetching manager info and employees
    // Replace with real API call if available
    setManagerName('John Doe');
    setEmployees([
      { id: 1, name: 'Alice Johnson', task: 'Prepare report' },
      { id: 2, name: 'Bob Smith', task: 'Client meeting' },
      { id: 3, name: 'Carol Brown', task: 'Code review' },
    ]);
  }, []);

  const handleLogout = () => {
    // You can also clear auth tokens or session here
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>Welcome, {managerName}</h2>
      <h3>Your Team</h3>
      <ul style={styles.list}>
        {employees.map((emp) => (
          <li key={emp.id} style={styles.card}>
            <strong>{emp.name}</strong> — {emp.task}
          </li>
        ))}
      </ul>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  card: {
    padding: '1rem',
    margin: '0.5rem 0',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    textAlign: 'left',
  },
  button: {
    marginTop: '2rem',
    padding: '0.7rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ManagerDashboard;
