import React, { useState } from 'react';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logged in with Email: ${email}`);
  };

  return (
    <div className="container-card">
      <h2 className="text-center mb-4">Login</h2>
      <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="form-control mb-3" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
    </div>
  );
}