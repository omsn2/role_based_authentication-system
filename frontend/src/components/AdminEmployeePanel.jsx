import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminEmployeePanel = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>👥 Employee Management</h2>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate('/admin/employee/add')} style={styles.button}>➕ Add Employee</button>
        <button onClick={() => navigate('/admin/employee/delete')} style={styles.button}>🗑️ Delete Employee</button>
        <button onClick={() => navigate('/admin/employee/view')} style={styles.button}>📋 View Employees</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    padding: '15px 25px',
    fontSize: '16px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default AdminEmployeePanel;
