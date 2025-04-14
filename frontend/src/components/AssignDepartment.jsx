import React, { useEffect, useState } from 'react';
import './AssignDepartment.css';

const AssignDepartment = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [department, setDepartment] = useState('');
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
    const res = await fetch(`http://localhost:5000/admin/user/${selectedId}/assign-department`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ department })
    });

    const result = await res.json();
    if (res.ok) {
      setMessage(`✅ ${result.message}`);
    } else {
      setMessage(`❌ ${result.message}`);
    }
  };

  return (
    <div className="assign-department-container">
      <h2>🏢 Assign Department</h2>
      {message && <p>{message}</p>}
      
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">-- Select Employee --</option>
        {employees.map((emp) => (
          <option key={emp.employee_id} value={emp.employee_id}>
            {emp.first_name} {emp.last_name}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={handleAssign}>Assign</button>
    </div>
  );
};

export default AssignDepartment;
