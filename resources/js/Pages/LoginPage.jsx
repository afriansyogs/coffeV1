import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const LoginPage = () => {
  const { errors } = usePage().props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post("/login", formData);
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg min-h-screen">
      {/* Kiri: Gambar */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-0 bg-gray-50">
        <img
          src="/assets/img/secure-login-transparant.png"
          alt="Secure Login"
          className="w-full max-w-md lg:max-w-lg h-auto"
        />
      </div>

      {/* Kanan: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-10 shadow-xl">
        <div className="w-full max-w-md lg:max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-8">Login!</h1>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="border-b border-black focus:outline-none w-full pb-2 text-gray-800"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <small className="text-red-400">{errors.email}</small>}
            </div>

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="border-b border-black focus:outline-none w-full pb-2 text-gray-800 pr-10"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-2 flex items-center focus:outline-none"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a9.978 9.978 0 014.898 1.285M15 15l6-6m-6 6l-6-6"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  )}
                </svg>
              </button>
              {errors.password && <small className="text-red-400">{errors.password}</small>}
            </div>

            {/* Remember Me */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="checkbox checkbox-error"
                checked={formData.remember}
                onChange={handleChange}
              />
              <label htmlFor="remember" className="text-sm font-medium ms-3 select-none">
                Remember Me
              </label>
            </div>

            {/* Button Login */}
            <button
              type="submit"
              className="w-full h-14 bg-dark-brown rounded-md border-2 border-dark-bbg-dark-brown hover:bg-white hover:text-dark-bbg-dark-brown active:scale-105 transform duration-200 text-white font-semibold"
            >
              Login
            </button>

            {/* Or */}
            <div className="text-center text-base font-medium my-2">Or</div>

            {/* Register Link */}
            <div className="text-center text-base">
              Don't have an account?{" "}
              <a
                href="/registerPage"
                className="font-bold underline underline-offset-2 cursor-pointer hover:text-blue-600"
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
