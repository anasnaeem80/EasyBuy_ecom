import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { auth, signOut } from "../firebase";
import {
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaTags,
} from "react-icons/fa"; // Update icon for Sale
import { logout } from "../redux/action"; // Ensure you have this action defined in your redux actions
import "./Navbar.css"; // Import CSS file for hover effects

const Navbar = () => {
  const { user } = useAuth(); // Get the user from the AuthContext
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.handleCart.items); // Get cart state from the Redux store
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0); // Calculate total quantity of items in the cart

  const handleLogout = async () => {
    await signOut(auth); // Sign out the user
    dispatch(logout()); // Dispatch logout action to clear the cart
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/' style={{ fontFamily: "cursive" }}>
          EasyBuy
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'></ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center'>
            <li className='nav-item me-3'>
              <Link
                className='nav-link position-relative d-flex align-items-center hover-effect'
                to='/cart'
              >
                <FaShoppingCart className='me-1' /> Cart
                {cartCount > 0 && (
                  <span className='badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle'>
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className='nav-item me-3'>
              <Link
                className='nav-link d-flex align-items-center hover-effect'
                to='/vendor-signup'
              >
                <FaTags className='me-1' /> Sale on EasyBuy!
              </Link>
            </li>
            {user ? (
              <li className='nav-item'>
                <button
                  className='btn btn-outline-danger d-flex align-items-center'
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className='me-1' /> Logout
                </button>
              </li>
            ) : (
              <>
                <li className='nav-item me-2'>
                  <Link
                    className='nav-link btn btn-outline-primary d-flex align-items-center'
                    to='/login'
                  >
                    <FaSignInAlt className='me-1' /> Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link btn btn-outline-success d-flex align-items-center'
                    to='/register'
                  >
                    <FaUserPlus className='me-1' /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
