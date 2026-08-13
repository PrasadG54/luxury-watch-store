import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ===============================
  // HANDLE INPUT
  // ===============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  // ===============================
  // HANDLE REGISTER
  // ===============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Frontend validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const data = await registerUser(formData);

      setSuccess(
        data.message ||
          "Registration successful. Please check your email."
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      setError(error.message || "Registration failed.");
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
          REGISTER CARD
      =============================== */}

      <main className="flex justify-center px-6 py-16">

        <div className="w-full max-w-md">

          <div className="text-center mb-10">

            <p className="text-[#B08A58] text-xs tracking-[4px] uppercase mb-4">
              Create Your Account
            </p>

            <h1 className="text-4xl md:text-5xl font-light tracking-wide">
              Register
            </h1>

            <p className="mt-5 text-sm text-[#777] leading-7">
              Create your account to discover exceptional
              timepieces and access our services.
            </p>

          </div>


          {/* ===============================
              FORM
          =============================== */}

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#E3DDD5] px-7 py-9 md:px-10"
          >

            {/* NAME */}

            <div className="mb-6">

              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[2px] text-[#777] mb-3"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border-b border-[#D8D0C6] bg-transparent px-1 py-3 text-sm outline-none focus:border-[#A88D6A] transition"
              />

            </div>


            {/* EMAIL */}

            <div className="mb-6">

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
                className="w-full border-b border-[#D8D0C6] bg-transparent px-1 py-3 text-sm outline-none focus:border-[#A88D6A] transition"
              />

            </div>


            {/* PASSWORD */}

            <div className="mb-6">

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
                placeholder="Create a password"
                className="w-full border-b border-[#D8D0C6] bg-transparent px-1 py-3 text-sm outline-none focus:border-[#A88D6A] transition"
              />

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="mb-8">

              <label
                htmlFor="confirmPassword"
                className="block text-xs uppercase tracking-[2px] text-[#777] mb-3"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full border-b border-[#D8D0C6] bg-transparent px-1 py-3 text-sm outline-none focus:border-[#A88D6A] transition"
              />

            </div>


            {/* ERROR */}

            {error && (
              <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}


            {/* SUCCESS */}

            {success && (
              <div className="mb-6 border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 leading-6">
                {success}
              </div>
            )}


            {/* REGISTER BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#A08C76] text-white py-4 text-sm uppercase tracking-[2px] hover:bg-[#8D7963] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>


            {/* LOGIN LINK */}

            <div className="text-center mt-8">

              <p className="text-sm text-[#777]">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="inline-block mt-2 text-sm uppercase tracking-[2px] text-[#8F7658] border-b border-[#A88D6A] pb-1 hover:text-[#5F4D3A] transition"
              >
                Login
              </Link>

            </div>

          </form>


          {/* VERIFICATION NOTICE */}

          <p className="text-center text-xs text-[#999] leading-6 mt-7 px-5">
            After registration, a verification email will be
            sent to your email address. You must verify your
            email before logging in.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Register;