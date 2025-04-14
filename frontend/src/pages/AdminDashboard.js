import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.employee_id}>
              <td>{user.employee_id}</td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.department}</td>
              <td>
                <button onClick={() => handleAssignDepartment(user.employee_id)}>Assign Dept</button>
                <button onClick={() => handleAssignRole(user.employee_id)}>Assign Role</button>
                <button onClick={() => handleDelete(user.employee_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleAssignDepartment(id) {
    // show modal or prompt to enter department
  }

  function handleAssignRole(id) {
    // show modal or prompt to enter role
  }

  function handleDelete(id) {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:5000/admin/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      alert('User deleted!');
      fetchUsers(); // refresh list
    })
    .catch(err => console.error('Delete error:', err));
  }
};

export default AdminDashboard;
