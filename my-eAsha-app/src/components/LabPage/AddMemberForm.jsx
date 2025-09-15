import React, { useState,useEffect,useRef,Children } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../assets/calendar.svg";
import { format, parse,isValid } from "date-fns";

const AddMemberForm = ({onClose,onAddDependent}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobileNumber: "",
    email: "",
    gender: "",
    relation: "",
    customRelation: "",
    address: "",
    pinCode: "",
  });

  const [dobDate, setDobDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);


  const formatDOBInput = (value) => {
    let cleaned = value.replace(/[^\d]/g, "");
    if (cleaned.length >= 5) {
      return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 4)}-${cleaned.slice(4, 8)}`;
    } else if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

  if (name === "dob") {
  const formatted = formatDOBInput(value);
  setFormData((prev) => ({ ...prev, dob: formatted }));

  const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
  if (datePattern.test(formatted)) {
    const parsed = parse(formatted, "dd-MM-yyyy", new Date());

    const isStrictlyValid =
      isValid(parsed) && format(parsed, "dd-MM-yyyy") === formatted;

    if (isStrictlyValid) {
      setDobDate(parsed);
    } else {
      setDobDate(null);
    }
  } else {
    setDobDate(null);
  }
}


    else if (name === "relation") {
      setFormData((prev) => ({
        ...prev,
        relation: value,
        customRelation: "",
      }));
    } 
     else if (name === "fullName") {
    // Allow only alphabets and spaces
    const onlyText = value.replace(/[^a-zA-Z\s]/g, "");
    // Capitalize first letter of each word
    const capitalized = onlyText
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setFormData({ ...formData, fullName: capitalized });
  } 
    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDobChange = (date) => {
    if (!date) return;
    const formatted = format(date, "dd-MM-yyyy");
    setDobDate(date);
    setFormData((prev) => ({ ...prev, dob: formatted }));
  };
  const calculateAge = (dob) => {
  if (!dob) return "";
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const inputRef = useRef();

useEffect(() => {
  if (inputRef.current) {
    setFormData((prev) =>
      prev.mobileNumber === "" ? { ...prev, mobileNumber: "+91" } : prev
    );
  }
}, []);

  const handleSubmit = (e) => {
  e.preventDefault();
  if(formData.mobileNumber.length !== 13){
    alert("Mobile number must be 10digits");
    return;
  }

  const finalData = {
    ...formData,
    name: formData.fullName,
    sex: formData.gender,
    age: calculateAge(dobDate),
    relation: formData.relation === "other" ? formData.customRelation : formData.relation,
  };

  onAddDependent(finalData);
  onClose();
  console.log("Form submitted:", finalData);

  };

  return (
    <>
    <style>
  {`
    input:focus,
select:focus,
textarea:focus {
  box-shadow: none !important;
  outline: none !important;
  border-color: inherit !important;
}

input,
select,
textarea {
  box-shadow: none !important;
  outline: none !important;
  border: 1px solid #8E8E8E !important;
  background-color: white;
  border-radius: 28px;
}
  input.dob-input{
  border:none !important}

     input[type=number]{
     -moz-appearance:textfield;}
     input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  .custom-datepicker-size {
  min-width: 330px;
  max-width: 100%;
  height:auto
  font-size: 14px; /* Optional: smaller calendar font */
}


  `}
</style>

    <div
      className="d-flex justify-content-center align-items-center vh-100"
      
    >
      <div
        className="bg-white rounded-4 p-5"
        style={{ width: "90%", maxWidth: "800px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Add New Member</h5>
          <button
            type="button"
            className="bg-transparent border-0 fs-4"
            style={{ lineHeight: "1", padding: "0", margin: "0" }}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Full Name (as per Aadhar card)</label>
              <input
                type="text"
                className="form-control rounded-pill"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

           <div className="col-md-6">
  <label className="form-label">Enter DOB</label>
  <div
    className="d-flex align-items-center"
    style={{
      border: '1px solid #8E8E8E',
      borderRadius: '28px',
      paddingLeft: '20px',
      paddingRight: '45px',
      paddingTop: '6px',
      paddingBottom: '6px',
      backgroundColor: '#fff',
      position: 'relative',
    }}
  >
    <input
      type="text"
      name="dob"
      value={formData.dob}
      onChange={handleChange}
      placeholder="dd-mm-yyyy"
      className="dob-input"
      style={{
        flex: 1,
        border: 'none',
        outline: 'none',
        background: 'transparent',
        fontSize: '14px',
        padding: 0, // <-- This removes the inner spacing that causes border look
        margin: 0, // <-- Also reset margin
      }}
    />
    <img
      src={calendarIcon}
      alt="calendar"
      width="20"
      height="20"
      style={{
        position: 'absolute',
        right: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 2,
      }}
      onClick={() => setShowCalendar(!showCalendar)}
    />
    {showCalendar && (
  <div style={{ position: 'absolute', top: '100%', zIndex: 5,left:0 }}>
    <DatePicker
      selected={dobDate}
      onChange={(date) => {
        handleDobChange(date);
        setShowCalendar(false); // hide after selection
      }}
      dateFormat="dd-MM-yyyy"
      maxDate={new Date()}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      openToDate={dobDate || new Date(2000, 0, 1)}
      inline
      calendarClassName="custom-datepicker-size"
    />
  </div>
)}

  </div>
</div>



<div className="col-md-6">
  <label className="form-label">Mobile Number</label>
  <input
    type="tel"
    className="form-control rounded-pill"
    name="mobileNumber"
    ref={inputRef}
    value={formData.mobileNumber}
    onChange={(e) => {
      const value = e.target.value;

      // Always enforce +91 prefix
      if (!value.startsWith("+91")) return;

      // Remove all non-digits after +91
      const digitsOnly = value.slice(3).replace(/\D/g, "");

      // Limit to 10 digits after +91
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, mobileNumber: "+91" + digitsOnly });
      }
    }}
    onKeyDown={(e) => {
      // Prevent deletion of +91 prefix
      if (e.target.selectionStart <= 3 && (e.key === "Backspace" || e.key === "Delete")) {
        e.preventDefault();
      }
    }}
    onFocus={(e) => {
    if (e.target.selectionStart < 3) {
      e.target.setSelectionRange(3,3)
      // Move cursor after +91
      setTimeout(() => e.target.setSelectionRange(3, 3), 0);
    }}}
    maxLength={13} // +91 + 10 digits
    placeholder="+911234567890"
    required
  />
</div>


            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control rounded-pill"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select rounded-pill"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Relation</label>
              <select
                className="form-select rounded-pill"
                name="relation"
                value={formData.relation}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="spouse">Spouse</option>
                <option value="son">Son</option>
                <option value="daughter">Daughter</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
              </select>

              {formData.relation === "other" && (
                <input
                  type="text"
                  className="form-control rounded-pill mt-2"
                  name="customRelation"
                  value={formData.customRelation}
                  onChange={handleChange}
                  placeholder="Specify relation"
                  required
                />
              )}
            </div>

            {/* Address + Pincode same row */}
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control rounded-pill"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label custom-input-number">Pin Code</label>
              <input
                type="number"
                className="form-control rounded-pill"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn text-white rounded-pill px-4"
              style={{ backgroundColor: "#00A99D" }}
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddMemberForm;
