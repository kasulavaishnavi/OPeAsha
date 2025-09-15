import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/eAshalogo.png"; // your logo path

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [serverMsg, setServerMsg] = useState("");

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user/sendLoginOTP", {
        value: email,
        verifyBy: "email",
      });
      if (response.data.success) {
        setOtpSent(true);
        setServerMsg(`OTP sent to ${email}`);
      } else {
        setServerMsg(response.data.message);
      }
    } catch (err) {
      setServerMsg(err.response?.data?.message || "Server error");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user/verifyLoginOTP", {
        value: email,
        otp,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // save JWT
        navigate("/app");
      } else {
        setServerMsg(response.data.message);
      }
    } catch (err) {
      setServerMsg(err.response?.data?.message || "Server error");
    }
  };

  return (
    <>
      <style>
        {`
          .login-wrapper input::placeholder {
            opacity: 0.2;
            color: #000305;
          }

          @media (min-width: 1024px) {
            .login-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .img-logo {
              width: 350px !important;
              height: 303px !important;
            }
          }

          @media (min-width: 768px) and (max-width: 1024px) {
            .login-wrapper .row {
              display: flex !important;
              flex-wrap: nowrap !important;
              align-items: center !important;
              justify-content: center !important;
              gap: 0 !important;
              --bs-gutter-x: 0 !important;
            }
            .login-wrapper .col-md-6 {
              flex: 0 1 auto !important;
              max-width: unset !important;
              padding: 0 !important;
            }
            .form {
              max-width: 464px;
              width: 100%;
            }
            .img-logo {
              width: 250px !important;
              height: 190px !important;
            }
          }

          @media (min-width: 425px) and (max-width: 767px) {
            .img-logo {
              width: 100px !important;
              height: 130px !important;
            }
            .form {
              margin-top: -30px;
            }
          }

          @media (max-width: 425px) {
            .img-logo {
              width: 77px !important;
              height: 102px !important;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .form {
              margin-top: -30px;
            }
          }
        `}
      </style>

      <div className="login-wrapper min-vh-100 d-flex justify-content-center align-items-center bg-white">
        <div className="row w-100 mx-0" style={{ maxWidth: "1100px" }}>
          {/* Left Section */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-4 p-lg-5 order-2 order-lg-1 form">
            <div style={{ maxWidth: "464px", width: "100%" }}>
              <h1 className="mb-4 fw-semibold text-center">Login to your account</h1>

              <form onSubmit={otpSent ? handleVerifyOTP : handleSendOTP}>
                {!otpSent ? (
                  <>
                    {/* Email input */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        style={{ borderRadius: "28px" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-100 text-white border-0"
                      style={{
                        backgroundColor: "#00A99D",
                        padding: "11px",
                        borderRadius: "28px",
                        fontWeight: "500",
                      }}
                    >
                      Send OTP
                    </button>
                  </>
                ) : (
                  <>
                    {/* OTP input */}
                    <div className="mb-3">
                      <label htmlFor="otp" className="form-label">Enter OTP sent to {email}</label>
                      <input
                        type="text"
                        id="otp"
                        className="form-control"
                        placeholder="Enter OTP"
                        style={{ borderRadius: "28px" }}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-100 text-white border-0"
                      style={{
                        backgroundColor: "#00A99D",
                        padding: "11px",
                        borderRadius: "28px",
                        fontWeight: "500",
                      }}
                    >
                      Verify & Login
                    </button>
                  </>
                )}

                {serverMsg && (
                  <div className="text-center mt-2 text-danger" style={{ fontSize: "0.875rem" }}>
                    {serverMsg}
                  </div>
                )}

                {/* Sign Up & Contact */}
                <div className="mt-3" style={{ fontSize: "0.9rem" }}>
                  Don’t have an account?{" "}
                  <Link to="/signup" style={{ color: "#00A99D" }} className="text-decoration-none">
                    Sign up!
                  </Link>
                </div>
                <div className="mt-2">
                  <Link to="/contact" style={{ color: "#00A99D" }} className="text-decoration-none">
                    Contact us
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-4 order-1 order-md-2">
            <img
              src={logo}
              alt="eAsha Healthcare"
              className="img-fluid img-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
