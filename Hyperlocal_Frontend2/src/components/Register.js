import React, { useState } from 'react';
export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'User' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    alert(`Registered ${form.name} as ${form.role}`);
  };

  return (
    <div className="container-card">
      <h2 className="text-center mb-4">Register</h2>
      <input className="form-control mb-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input className="form-control mb-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input className="form-control mb-2" name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} />
      <select className="form-control mb-3" name="role" value={form.role} onChange={handleChange}>
        <option>User</option>
        <option>Provider</option>
        <option>Admin</option>
      </select>
      <button className="btn btn-success w-100" onClick={handleRegister}>Register</button>
    </div>
  );
}