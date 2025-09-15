import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import eAshaLogo from "../../assets/eAshalogo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../../pages/LoginPage/SignUp.css';

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .test(
      "Aadhar-name",
      "Full name as per Aadhar",
      (value) => value && value.trim().split(" ").length >= 2
    ),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\+91\d{10}$/, "Must be a valid 10-digit number")
    .required("Phone number is required"),
  dob: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
      "Password must contain uppercase, lowercase, number & special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Re-enter password is required"),
  acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

function SignUp() {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showP, setShowP] = useState(true);

  const handleSignUp = async (values) => {
    try {
      const response = await axios.post("http://localhost:4000/api/user/registerOTP", {
        name: values.fullName,
        email: values.email,
        phoneNum: values.phone,
        password: values.password,
        dob: values.dob,
        gender: values.gender,
        verifyBy: "email",
      });

      if (response.data.success) {
        setOtpSent(true);
        setServerMsg(`OTP sent to ${values.email}`);
        setEmailOrPhone(values.email);
      } else {
        setServerMsg(response.data.message);
      }
    } catch (err) {
      setServerMsg(err.response?.data?.message || "Server error");
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/user/verifyRegistrationOTP", {
        value: emailOrPhone,
        otp,
      });
      if (response.data.success) {
        setServerMsg("Signup verified! You can now login.");
        navigate("/login");
      } else {
        setServerMsg(response.data.message);
      }
    } catch (err) {
      setServerMsg(err.response?.data?.message || "Server error");
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/user/resendRegistrationOTP", {
        value: emailOrPhone,
      });
      setServerMsg(response.data.message);
    } catch (err) {
      setServerMsg(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center bg-white px-4">
      <div className="form-wrapper max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="form-container p-4">
          {!otpSent ? (
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "+91",
                dob: "",
                gender: "",
                password: "",
                confirmPassword: "",
                acceptTerms: false,
              }}
              validationSchema={SignUpSchema}
              onSubmit={handleSignUp}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-3 w-full text-sm">
                  <h1 className="font-urbanist font-semibold text-2xl text-center">Sign up</h1>

                  <div>
                    <label className="font-urbanist text-[14px] text-[#494949]">Full name</label>
                    <Field name="fullName" className="w-full h-10 border border-gray-400 rounded-lg px-2 focus:outline-none focus:ring" />
                    <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="font-urbanist text-[14px] text-[#494949]">Email</label>
                    <Field name="email" type="email" placeholder="Enter email" className="w-full h-10 border border-gray-400 rounded-lg px-2 focus:outline-none focus:ring" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div>
                    <label className="font-urbanist text-[14px] text-[#494949]">Phone number</label>
                    <div className="flex gap-2">
                      <div className="w-20 h-10 flex items-center justify-center border border-gray-400 rounded-lg bg-gray-100 text-gray-700 font-medium">+91</div>
                      <input
                        name="phone"
                        type="text"
                        inputMode="numeric"
                        maxLength="10"
                        placeholder="Enter phone number"
                        className="w-full h-10 border border-gray-400 rounded-lg px-2 focus:outline-none focus:ring"
                        onChange={(e) => {
                          const cleaned = e.target.value.replace(/\D/g, "");
                          if (cleaned.length <= 10) {
                            setFieldValue("phone", "+91" + cleaned);
                          }
                        }}
                      />
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-urbanist text-[14px] text-[#494949]">Date of birth</label>
                      <Field type="date" name="dob" className="w-full h-10 border border-gray-400 rounded-lg px-2 focus:outline-none focus:ring" />
                      <ErrorMessage name="dob" component="div" className="text-red-500 text-xs" />
                    </div>

                    <div>
                      <label className="font-urbanist text-[14px] text-[#494949]">Gender</label>
                      <Field as="select" name="gender" className="w-full h-10 border border-gray-400 rounded-lg px-2 focus:outline-none focus:ring">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Field>
                      <ErrorMessage name="gender" component="div" className="text-red-500 text-xs" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="font-urbanist text-[14px] text-[#494949]">Password</label>
                    <Field type={showPassword ? "password" : "text"} name="password" className="w-full h-10 border border-gray-400 rounded-lg px-2 focus:outline-none focus:ring" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2.5">
                      {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                    </button>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div className="relative">
                    <label className="font-urbanist text-[14px] text-[#494949]">Re-enter Password</label>
                    <Field type={showP ? "password" : "text"} name="confirmPassword" className="w-full h-10 border border-gray-400 rounded-lg px-2 focus:outline-none focus:ring" />
                    <button type="button" onClick={() => setShowP(!showP)} className="absolute right-2 top-2.5">
                      {showP ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                    </button>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />
                  </div>

                  <div className="flex items-start gap-2 text-xs">
                    <Field type="checkbox" name="acceptTerms" className="mt-1 w-3 h-3 shrink-0" />
                    <span>I consent to store personal information and accept terms.</span>
                  </div>
                  <ErrorMessage name="acceptTerms" component="div" className="text-red-500 text-xs" />

                  <button type="submit" className="w-full bg-teal-500 text-white rounded-lg py-2 hover:bg-teal-600 text-sm">Register & Send OTP</button>

                  <p className="text-start mt-2 text-gray-600 text-xs">
                    Already registered?{" "}
                    <span onClick={() => navigate("/login")} className="text-teal-500 cursor-pointer">Log in</span>
                  </p>
                </Form>
              )}
            </Formik>
          ) : (
            <div className="otp-container text-sm">
              <h3>Enter OTP sent to {emailOrPhone}</h3>
              <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" className="w-full h-10 border border-gray-400 rounded-lg px-2 my-2" />
              <div className="flex gap-2">
                <button onClick={handleVerifyOTP} className="w-1/2 bg-teal-500 text-white rounded-lg py-2 text-sm hover:bg-teal-600">Verify OTP</button>
                <button onClick={handleResendOTP} className="w-1/2 bg-gray-300 text-gray-700 rounded-lg py-2 text-sm hover:bg-gray-400">Resend OTP</button>
              </div>
              {serverMsg && <p className="text-xs mt-1 text-red-500">{serverMsg}</p>}
            </div>
          )}
        </div>

        <div className="image-wrapper flex justify-center w-full items-center">
          <img src={eAshaLogo} alt="eAsha Healthcare" className="w-24 h-28 sm:w-32 sm:h-36 md:w-44 md:h-52 lg:w-64 lg:h-80 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
