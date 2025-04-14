import React, { useEffect, useState } from 'react';
import './AssignRole.css';

const AssignRole = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await fetch('http://localhost:5000/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setEmployees(data);
    };

    fetchEmployees();
  }, [token]);

  const handleAssign = async () => {
    const res = await fetch(`http://localhost:5000/admin/user/${selectedId}/assign-role`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ role })
    });

    const result = await res.json();
    if (res.ok) {
      setMessage(`✅ ${result.message}`);
    } else {
      setMessage(`❌ ${result.message}`);
    }
  };

  return (
    <div className="assign-role-container">
      <h2>🎭 Assign Role</h2>
      {message && <p className="status-msg">{message}</p>}

      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="dropdown"
      >
        <option value="">-- Select Employee --</option>
        {employees.map((emp) => (
          <option key={emp.employee_id} value={emp.employee_id}>
            {emp.first_name} {emp.last_name}
          </option>
        ))}
      </select>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="dropdown"
      >
        <option value="">-- Select Role --</option>
        <option value="employee">Employee</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
      </select>

      <button className="assign-btn" onClick={handleAssign}>Assign</button>
    </div>
  );
};

export default AssignRole;
