import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState(""); // State for password reset email
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        setMessage("Login successful.");
        setMessageType("success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setMessage("User does not exist. Please register first.");
          setMessageType("error");
          setTimeout(() => {
            navigate("/register");
          }, 2000);
        } else {
          console.error("Error logging in user:", error);
          setMessage("Error logging in user.");
          setMessageType("error");
        }
      });
  };

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        setMessage("Password reset email sent.");
        setMessageType("success");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        setMessage("Error sending password reset email.");
        setMessageType("error");
      });
  };

  return (
    <>
      <Navbar />
      <div className='container my-3 py-3'>
        <h1 className='text-center'>Login</h1>
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
              <div className='my-3'>
                <label htmlFor='floatingInput'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  required
                />
              </div>
              <div className='my-3'>
                <p>
                  Forgot your password?{" "}
                  <Link
                    to='#'
                    className='text-decoration-underline text-info'
                    data-bs-toggle='modal'
                    data-bs-target='#passwordResetModal'
                  >
                    Reset Password
                  </Link>
                </p>
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

      {/* Password Reset Modal */}
      <div
        className='modal fade'
        id='passwordResetModal'
        tabIndex='-1'
        aria-labelledby='passwordResetModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='passwordResetModalLabel'>
                Reset Password
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='my-3'>
                <label htmlFor='resetEmail'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='resetEmail'
                  placeholder='name@example.com'
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handlePasswordReset}
                data-bs-dismiss='modal'
              >
                Send Reset Email
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
