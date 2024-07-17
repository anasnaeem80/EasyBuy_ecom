import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
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
      console.log("User created:", user);

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip: zip,
        country: country,
      });
      console.log("User document written");

      setMessage("User registered successfully.");
      setMessageType("success");

      // Delay the navigation to show the message
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("Error registering user: " + error.message);
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
        <h1 className='text-center'>Register</h1>
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
                <label htmlFor='Name'>Full Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='Name'
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <label htmlFor='Country'>Country</label>
                <input
                  type='text'
                  className='form-control'
                  id='Country'
                  placeholder='Enter Your Country'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div className='form-check my-3'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='Terms'
                  required
                />
                <label className='form-check-label' htmlFor='Terms'>
                  I agree to the <Link to='/terms'>Terms and Conditions</Link>
                </label>
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

export default Register;
