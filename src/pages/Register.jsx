import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

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
      });
      console.log("User document written");

      alert("User registered successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user: " + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container my-3 py-3'>
        <h1 className='text-center'>Register</h1>
        <hr />
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

export default Register;
