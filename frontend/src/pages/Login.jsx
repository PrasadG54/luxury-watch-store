import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // HANDLE INPUT


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };


  // HANDLE LOGIN


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser(formData);

      login(data.token, data.user);

      // Go back to homepage
      navigate("/");

    } catch (error) {
      setError(error.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#292929]">

      {/* ===============================
          HEADER
      =============================== */}

      <div className="pt-12 text-center">

        <Link to="/" className="inline-block">

          <p className="text-2xl tracking-[7px] font-light">
            LUXURY WATCH
          </p>

          <p className="text-[9px] tracking-[6px] text-[#A88D6A] mt-1">
            TIMEPIECES
          </p>

        </Link>

      </div>


      {/* ===============================
          LOGIN CARD
      =============================== */}

      <main className="flex justify-center px-6 py-16">

        <div className="w-full max-w-md">

          {/* TITLE */}

          <div className="text-center mb-10">

            <p className="text-[#B08A58] text-xs tracking-[4px] uppercase mb-4">
              Welcome Back
            </p>

            <h1 className="text-4xl md:text-5xl font-light tracking-wide">
              Login
            </h1>

            <p className="mt-5 text-sm text-[#777] leading-7">
              Sign in to access your account and continue
              exploring our collection.
            </p>

          </div>


          {/* ===============================
              FORM
          =============================== */}

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#E3DDD5] px-7 py-9 md:px-10"
          >

            {/* EMAIL */}

            <div className="mb-7">

              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[2px] text-[#777] mb-3"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full border-b border-[#D8D0C6] bg-transparent px-1 py-3 text-sm outline-none focus:border-[#A88D6A] transition"
              />

            </div>


            {/* PASSWORD */}

            <div className="mb-8">

              <label
                htmlFor="password"
                className="block text-xs uppercase tracking-[2px] text-[#777] mb-3"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full border-b border-[#D8D0C6] bg-transparent px-1 py-3 text-sm outline-none focus:border-[#A88D6A] transition"
              />

            </div>


            {/* ERROR */}

            {error && (
              <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#A08C76] text-white py-4 text-sm uppercase tracking-[2px] hover:bg-[#8D7963] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Login"}
            </button>


            {/* REGISTER */}

            <div className="text-center mt-8">

              <p className="text-sm text-[#777]">
                Don't have an account?
              </p>

              <Link
                to="/register"
                className="inline-block mt-2 text-sm uppercase tracking-[2px] text-[#8F7658] border-b border-[#A88D6A] pb-1 hover:text-[#5F4D3A] transition"
              >
                Create Account
              </Link>

            </div>

          </form>


          {/* VERIFICATION NOTICE */}

          <p className="text-center text-xs text-[#999] leading-6 mt-7 px-5">
            Your email must be verified before you can
            access your account.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Login;