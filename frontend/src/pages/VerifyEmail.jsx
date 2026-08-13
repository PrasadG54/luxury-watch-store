import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

function VerifyEmail() {
  const { token } = useParams();

  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");

  const verificationStarted = useRef(false);

  useEffect(() => {
    // Prevent duplicate verification request
    if (verificationStarted.current) {
      return;
    }

    verificationStarted.current = true;

    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/verify/${token}`
        );

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus("success");
          setMessage(data.message);
        } else {
          setStatus("error");
          setMessage(
            data.message || "Verification failed"
          );
        }
      } catch (error) {
        console.error("Email verification error:", error);

        setStatus("error");
        setMessage(
          "Unable to verify your email. Please try again."
        );
      }
    };

    if (token) {
      verifyEmail();
    } else {
      setStatus("error");
      setMessage("Verification token is missing.");
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-[#f7f5f1] flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white px-8 py-14 md:px-14 text-center shadow-sm">

        <p className="text-[#a88d6a] text-xs tracking-[5px] uppercase mb-5">
          Luxury Watch
        </p>

        {status === "verifying" && (
          <>
            <div className="w-10 h-10 border-2 border-[#d8c7b3] border-t-[#a88d6a] rounded-full animate-spin mx-auto mb-8"></div>

            <h1 className="text-3xl md:text-4xl font-light text-[#292929]">
              Verifying Your Email
            </h1>

            <p className="mt-5 text-gray-500 leading-7">
              Please wait while we confirm your email address.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-8 w-16 h-16 rounded-full border border-[#a88d6a] flex items-center justify-center">
              <span className="text-[#a88d6a] text-2xl">
                ✓
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-light text-[#292929]">
              Email Verified
            </h1>

            <p className="mt-5 text-gray-600 leading-7">
              {message}
            </p>

            <p className="mt-3 text-gray-500 leading-7">
              Your Luxury Watch Store account is now verified.
            </p>

            <Link
              to="/login"
              className="inline-block mt-10 bg-[#a08c76] text-white px-10 py-4 text-sm uppercase tracking-[2px] hover:bg-[#8d7963] transition"
            >
              Continue to Login
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-8 w-16 h-16 rounded-full border border-red-300 flex items-center justify-center">
              <span className="text-red-500 text-2xl">
                ×
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-light text-[#292929]">
              Verification Failed
            </h1>

            <p className="mt-5 text-gray-600 leading-7">
              {message}
            </p>

            <Link
              to="/"
              className="inline-block mt-10 border border-[#a88d6a] text-[#8f7658] px-10 py-4 text-sm uppercase tracking-[2px] hover:bg-[#a88d6a] hover:text-white transition"
            >
              Back to Home
            </Link>
          </>
        )}

      </div>

    </div>
  );
}

export default VerifyEmail;