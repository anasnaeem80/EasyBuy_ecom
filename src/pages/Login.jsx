import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        alert("Login successful.");
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert("User does not exist. Please register first.");
          navigate("/register");
        } else {
          console.error("Error logging in user:", error);
          alert("Error logging in user.");
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className='container my-3 py-3'>
        <h1 className='text-center'>Login</h1>
        <hr />
        <div className='row my-4 h-100'>
          <div className='col-md-4 col-lg-4 col-sm-8 mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className='my-3'>
                <label htmlFor='floatingInput'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='my-3'>
                <label htmlFor='floatingPassword'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='floatingPassword'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='my-3'>
                <p>
                  New Here?{" "}
                  <Link
                    to='/register'
                    className='text-decoration-underline text-info'
                  >
                    Register
                  </Link>
                </p>
              </div>
              <div className='text-center'>
                <button className='my-2 mx-auto btn btn-dark' type='submit'>
                  Login
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

export default Login;
