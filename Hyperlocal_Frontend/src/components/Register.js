import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    alert(`Registered as ${formData.name} (${formData.role})`);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <input
        className="form-control mb-2"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="form-control mb-2"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="form-control mb-2"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <select
        className="form-control mb-2"
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option>User</option>
        <option>Provider</option>
        <option>Admin</option>
      </select>
      <button className="btn btn-success" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;
