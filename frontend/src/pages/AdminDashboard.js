import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error('❌ Error fetching users:', err);
    }
  };

  const assignDepartment = async (userId, department) => {
    try {
      const res = await axios.put(
        `/admin/user/${userId}/assign-department`,
        { department },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message);
      fetchUsers(); // Refresh list
    } catch (err) {
      console.error('❌ Error assigning department:', err.response?.data?.message || err.message);
    }
  };

  const assignRole = async (userId, role) => {
    try {
      const res = await axios.put(
        `/admin/user/${userId}/assign-role`,
        { role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message);
      fetchUsers();
    } catch (err) {
      console.error('❌ Error assigning role:', err.response?.data?.message || err.message);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(`/admin/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(res.data.message);
      fetchUsers();
    } catch (err) {
      console.error('❌ Error deleting user:', err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Current Role</th>
            <th>Department</th>
            <th>Assign Role</th>
            <th>Assign Department</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.department || '-'}</td>
              <td>
                <select onChange={(e) => assignRole(u._id, e.target.value)} defaultValue="">
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Department"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      assignDepartment(u._id, e.target.value);
                    }
                  }}
                />
              </td>
              <td>
                <button onClick={() => deleteUser(u._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
