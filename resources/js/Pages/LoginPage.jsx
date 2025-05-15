import { useState } from 'react';
import { router, usePage } from "@inertiajs/react";

const LoginPage = () => {
  const { errors } = usePage().props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
      e.preventDefault();
      router.post("/login", formData);
  };
  return(
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input-style" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="input-style" />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </>
  )
}

export default LoginPage;