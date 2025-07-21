import React from "react";

const users = [
  { id: 1, name: "Amit", role: "User" },
  { id: 2, name: "Priya", role: "Provider" },
  { id: 3, name: "Admin", role: "Admin" },
];

function AdminPanel() {
  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
