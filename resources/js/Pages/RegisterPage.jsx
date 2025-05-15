import { useState } from 'react';
import { router } from "@inertiajs/react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
      e.preventDefault();
      router.post("/register", formData);
  };
  return(
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <input type="text" name="username" placeholder="Nama" onChange={handleChange} className="input-style" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input-style" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="input-style" />
        <input type="password" name="password_confirmation" placeholder="Konfirmasi Password" onChange={handleChange} className="input-style" />
        <button type="submit" className="btn-primary">Register</button>
      </form>
    </>
  )
}

export default RegisterPage;