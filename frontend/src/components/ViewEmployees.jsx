import React, { useEffect, useState } from 'react';
import './ViewEmployees.css'; // 👈 CSS should be classy

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const currentAdminEmail = localStorage.getItem('email');
  
        console.log('🕵️ Admin Email from localStorage:', currentAdminEmail); // debug
  
        const res = await fetch('http://localhost:5000/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        const data = await res.json();
        console.log('🧾 Raw employee list:', data); // debug
  
        const filtered = data.filter(emp => {
          console.log('👤 Checking:', emp.company_email); // debug each employee
          return emp.company_email?.trim().toLowerCase() !== currentAdminEmail?.trim().toLowerCase();
        });
  
        console.log('✅ Filtered Employees:', filtered); // debug
  
        setEmployees(filtered);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching employees:', err);
        setLoading(false);
      }
    };
  
    fetchEmployees();
  }, []);
  

  if (loading) return <p>Loading...</p>;

  return (
    <div className="view-employees-container">
      <h2>📋 All Registered Employees</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.employee_id}>
                <td>{emp.employee_code}</td>
                <td>{emp.first_name} {emp.last_name}</td>
                <td>{emp.company_email}</td>
                <td>{emp.role.charAt(0).toUpperCase() + emp.role.slice(1)}</td>
                <td>{emp.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewEmployees;
