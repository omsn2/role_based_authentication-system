import React, { useEffect, useState } from 'react';
import './DeleteEmployee.css'; // 👈 optional CSS for styling

const DeleteEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const adminToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch('http://localhost:5000/admin/users', {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        });

        const data = await res.json();
        setEmployees(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching employees:', err);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [adminToken]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this employee? 😬')) return;

    try {
      const res = await fetch(`http://localhost:5000/admin/user/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      const result = await res.json();

      if (res.ok) {
        setEmployees((prev) => prev.filter((emp) => emp.employee_id !== id));
        setMessage(`✅ ${result.message}`);
      } else {
        setMessage(`❌ ${result.message}`);
      }
    } catch (err) {
      console.error('Error deleting employee:', err);
      setMessage('❌ Error deleting employee.');
    }
  };

  return (
    <div className="delete-employee-container">
      <h2>🗑️ Delete Employee</h2>
      {message && <p className="status-msg">{message}</p>}
      {loading ? (
        <p>Loading employees...</p>
      ) : employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.employee_id}>
                <td>{emp.employee_code}</td>
                <td>{emp.first_name} {emp.last_name}</td>
                <td>{emp.company_email}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(emp.employee_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DeleteEmployee;
