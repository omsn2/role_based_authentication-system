import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome, Admin</h1>
      <div style={{ marginTop: '30px' }}>
        <button onClick={() => navigate('/admin/employee')} style={styles.btn}>Employee</button>
        <button onClick={() => navigate('/admin/organization')} style={styles.btn}>Organization</button>
      </div>
    </div>
  );
};

const styles = {
  btn: {
    margin: '10px',
    padding: '15px 30px',
    fontSize: '18px',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  }
};

export default AdminDashboard;
