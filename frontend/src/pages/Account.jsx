import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    logout();

    // Return to homepage
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#292929]">

      {/* HEADER */}

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


      {/* ACCOUNT */}

      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* TITLE */}

        <div className="text-center mb-14">

          <p className="text-[#B08A58] text-xs tracking-[4px] uppercase mb-4">
            Personal Space
          </p>

          <h1 className="text-4xl md:text-5xl font-light tracking-wide">
            My Account
          </h1>

          <p className="mt-5 text-sm text-[#777]">
            Welcome back, {user?.name || "Guest"}.
          </p>

        </div>


        {/* ACCOUNT CONTENT */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PERSONAL INFORMATION */}

          <div className="md:col-span-2 bg-white border border-[#E3DDD5] p-8">

            <p className="text-[#B08A58] text-xs tracking-[3px] uppercase mb-8">
              Personal Information
            </p>


            {/* NAME */}

            <div className="border-b border-[#E5DFD7] pb-6 mb-6">

              <p className="text-xs uppercase tracking-[2px] text-[#999] mb-2">
                Full Name
              </p>

              <p className="text-lg font-light">
                {user?.name || "Not available"}
              </p>

            </div>


            {/* EMAIL */}

            <div className="border-b border-[#E5DFD7] pb-6 mb-6">

              <p className="text-xs uppercase tracking-[2px] text-[#999] mb-2">
                Email Address
              </p>

              <p className="text-lg font-light break-all">
                {user?.email || "Not available"}
              </p>

            </div>


            {/* VERIFICATION */}

            <div>

              <p className="text-xs uppercase tracking-[2px] text-[#999] mb-2">
                Email Verification
              </p>

              <p className="text-sm text-green-700">
                ✓ Email Verified
              </p>

            </div>

          </div>


          {/* ACCOUNT ACTIONS */}

          <div className="bg-white border border-[#E3DDD5] p-8">

            <p className="text-[#B08A58] text-xs tracking-[3px] uppercase mb-8">
              Account
            </p>


            <div className="space-y-4">

              <Link
                to="/appointments"
                className="block border border-[#E3DDD5] px-5 py-4 text-sm tracking-[1px] hover:border-[#A88D6A] transition"
              >
                My Appointments
              </Link>


              <Link
                to="/"
                className="block border border-[#E3DDD5] px-5 py-4 text-sm tracking-[1px] hover:border-[#A88D6A] transition"
              >
                Explore Collection
              </Link>

            </div>

          </div>

        </div>


        {/* LOGOUT */}

        <div className="flex justify-center mt-12">

          <button
            onClick={handleLogout}
            className="border border-[#292929] px-10 py-4 text-sm uppercase tracking-[3px] hover:bg-[#292929] hover:text-white transition"
          >
            Logout
          </button>

        </div>


        {/* SECURITY MESSAGE */}

        <p className="text-center text-xs text-[#999] leading-6 mt-7 max-w-md mx-auto">
          Logging out will end your current session and remove
          your authentication information from this browser.
        </p>

      </main>

    </div>
  );
}

export default Account;