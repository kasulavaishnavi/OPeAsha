import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/eAshalogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotOtp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [doctorId, setDoctorId] = useState(location.state?.doctorId || null);
  const from = location.state?.from || "forgot-password"; 
  const identifier = location.state?.identifier || ""; 

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

const verifyOTP = async () => {
  const enteredOtp = otp.join("");
  if (enteredOtp.length < 4) {
    setError(true);
    return;
  }

  setLoading(true);
  try {
    const verifyBy = identifier.includes("@") ? "email" : "mobile";

    // ✅ Build the correct payload
    const payload = {
      doctorId,       // Include doctorId
      verifyBy,       // email or mobile
      otp: enteredOtp,
      ...(verifyBy === "email"
        ? { email: identifier }
        : { mobile: identifier }),
    };

    const res = await fetch(
      "http://localhost:5000/api/doctors/forgot-password/verify-otp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json",doctorId:doctorId, },
        body: JSON.stringify(payload), // ✅ Use full payload
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Invalid OTP");

    setError(false);

    if (from === "forgot-password") {
      navigate("/create-password", { state: { identifier, doctorId } });
    } else {
      toast.success("OTP verified!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  } catch (err) {
    setError(true);
    toast.error(err.message);
  } finally {
    setLoading(false);
  }
};

  const resendOTP = async () => {
      if (!doctorId) return alert("Doctor ID missing");

    try {
      const verifyBy = identifier.includes("@") ? "email" : "mobile";
      const payload =
        verifyBy === "email"
          ? { verifyBy, email: identifier }
          : { verifyBy, mobile: identifier };

      const res = await fetch(
        "http://localhost:5000/api/doctors/resend-forgot-password-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json",doctorId:doctorId, },
        body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to resend OTP");

      toast.success(`OTP resent to your ${verifyBy}`);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyOTP();
  };

  return (
    <div
      className="w-100 d-flex flex-column justify-content-center"
      style={{ minHeight: "100vh", position: "relative" }}
    >
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="text-center mb-4 otp-form">
        <h1 className="mb-3" style={{ fontWeight: 600, color: "#252525" }}>
          OTP Verification
        </h1>
        <p
          className="text-muted"
          style={{ color: "#494949", fontSize: "20px", fontWeight: 400 }}
        >
          Please enter the OTP we’ve sent to your registered{" "}
          {identifier.includes("@") ? "email address" : "phone number"}.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-100"
        style={{
          maxWidth: "350px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="d-flex justify-content-center otp"
          style={{ gap: "24px", marginBottom: "2rem" }}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              className="form-control text-center p-0"
              style={{
                width: "50px",
                height: "50px",
                fontSize: "2.125rem",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "50px",
                border: "none",
                backgroundColor: "#F7F7F7",
                borderRadius: "8px",
              }}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              required
            />
          ))}
        </div>

        <div
          className="mb-3"
          style={{
            height: "24px",
            fontWeight: 500,
            color: error ? "red" : "transparent",
            transition: "color 0.3s ease",
            textAlign: "center",
          }}
        >
          Invalid OTP. Please try again.
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 py-2 mb-3"
          style={{
            maxWidth: "350px",
            height: "46px",
            borderRadius: "28px",
            padding: "12px 10px",
            backgroundColor: "#00A99D",
            border: "none",
            fontWeight: 400,
            fontSize: "1.125rem",
            lineHeight: "22px",
            textAlign: "center",
          }}
          disabled={loading}
        >
          {loading ? "Processing..." : "Continue"}
        </button>
      </form>

      <div
        className="text-center mt-3"
        style={{ fontWeight: 400, fontSize: "1.125rem", color: "#494949" }}
      >
        <p>Didn't receive the code?</p>
        <button
          className="btn btn-link p-0"
          style={{ fontWeight: 400, fontSize: "1.125rem", color: "#00A99D" }}
          onClick={resendOTP}
          disabled={loading}
        >
          {loading ? "Resending..." : "Resend Code"}
        </button>
      </div>
    </div>
  );
};

export default ForgotOtp;
