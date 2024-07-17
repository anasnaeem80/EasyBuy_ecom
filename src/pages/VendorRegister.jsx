// src/pages/VendorRegister.jsx
import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const VendorRegister = () => {
  const [companyName, setCompanyName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [businessRegNumber, setBusinessRegNumber] = useState("");
  const [taxIdNumber, setTaxIdNumber] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "vendors", user.uid), {
        uid: user.uid,
        companyName: companyName,
        contactPersonName: contactPersonName,
        email: email,
        phone: phone,
        businessRegNumber: businessRegNumber,
        taxIdNumber: taxIdNumber,
        businessAddress: businessAddress,
        city: city,
        state: state,
        postalCode: postalCode,
      });

      setMessage("Vendor registered successfully.");
      setMessageType("success");

      // Delay the navigation to show the message
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage("Error registering vendor: " + error.message);
      setMessageType("error");
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className='container my-3 py-3'>
        <h1 className='text-center'>Vendor Register</h1>
        <hr />
        {message && (
          <div
            className={`alert ${
              messageType === "success" ? "alert-success" : "alert-danger"
            }`}
            role='alert'
          >
            {message}
          </div>
        )}
        <div className='row my-4 h-100'>
          <div className='col-md-4 col-lg-4 col-sm-8 mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className='form my-3'>
                <label htmlFor='CompanyName'>Company Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='CompanyName'
                  placeholder='Enter Your Company Name'
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='ContactPersonName'>Contact Person Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='ContactPersonName'
                  placeholder='Enter Contact Person Name'
                  value={contactPersonName}
                  onChange={(e) => setContactPersonName(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='Email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='Email'
                  placeholder='name@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='Phone'>Phone Number</label>
                <input
                  type='tel'
                  className='form-control'
                  id='Phone'
                  placeholder='Enter Your Phone Number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='Password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='Password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='BusinessRegNumber'>
                  Business Registration Number
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='BusinessRegNumber'
                  placeholder='Enter Your Business Registration Number'
                  value={businessRegNumber}
                  onChange={(e) => setBusinessRegNumber(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='TaxIdNumber'>Tax Identification Number</label>
                <input
                  type='text'
                  className='form-control'
                  id='TaxIdNumber'
                  placeholder='Enter Your Tax Identification Number'
                  value={taxIdNumber}
                  onChange={(e) => setTaxIdNumber(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='BusinessAddress'>Business Address</label>
                <input
                  type='text'
                  className='form-control'
                  id='BusinessAddress'
                  placeholder='Enter Your Business Address'
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='City'>City</label>
                <input
                  type='text'
                  className='form-control'
                  id='City'
                  placeholder='Enter Your City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='State'>State/Province</label>
                <input
                  type='text'
                  className='form-control'
                  id='State'
                  placeholder='Enter Your State/Province'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div className='form my-3'>
                <label htmlFor='PostalCode'>Postal/ZIP Code</label>
                <input
                  type='text'
                  className='form-control'
                  id='PostalCode'
                  placeholder='Enter Your Postal/ZIP Code'
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </div>
              <div className='my-3'>
                <p>
                  Already have an account?{" "}
                  <Link
                    to='/login'
                    className='text-decoration-underline text-info'
                  >
                    Login
                  </Link>
                </p>
              </div>
              <div className='text-center'>
                <button className='my-2 mx-auto btn btn-dark' type='submit'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VendorRegister;
