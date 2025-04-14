import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminOrganizationPanel = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>🏢 Organization Setup</h2>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate('/admin/organization/assign-department')} style={styles.button}>🏷️ Assign Department</button>
        <button onClick={() => navigate('/admin/organization/assign-role')} style={styles.button}>🧾 Assign Role</button>
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
    backgroundColor: '#22c55e',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default AdminOrganizationPanel;
