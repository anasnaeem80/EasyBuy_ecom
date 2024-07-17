import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css"; // Import the CSS file for footer styles

const Footer = () => {
  const navigate = useNavigate();

  const handleSaleButtonClick = () => {
    navigate("/vendor-register");
  };

  return (
    <>
      <footer className='footer mb-0 text-center'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-4'>
              <h5 className='text-primary'>Quick Links</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='/home' className='text-primary'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/shop' className='text-primary'>
                    Shop
                  </a>
                </li>
                <li>
                  <a href='/about' className='text-primary'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='/contact' className='text-primary'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='/faq' className='text-primary'>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href='/shipping' className='text-primary'>
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href='/returns' className='text-primary'>
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a href='/terms' className='text-primary'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='/privacy' className='text-primary'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-4'>
              <h5 className='text-primary'>Contact Information</h5>
              <p>
                123 Ecommerce St., Suite 100
                <br />
                City, State, 12345
              </p>
              <p>Email: info@ecommerce.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className='col-md-4'>
              <h5 className='text-primary'>Stay Connected</h5>
              <p>
                <a
                  className='text-dark fs-4 mx-2'
                  href='https://www.linkedin.com/in/anas-naeem-832229246/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa fa-linkedin'></i>
                </a>
                <a
                  className='text-dark fs-4 mx-2'
                  href='https://github.com/anasnaeem80'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa fa-github'></i>
                </a>
              </p>
              <p>
                <a href='/newsletter' className='btn btn-primary'>
                  Subscribe to Newsletter
                </a>
              </p>
              <p>
                <button
                  className='btn btn-secondary'
                  onClick={handleSaleButtonClick}
                >
                  Sale on EasyBuy
                </button>
              </p>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-12'>
              <p className='text-center'>
                &copy; {new Date().getFullYear()} EasyBuy. All rights reserved.
              </p>
              <p className='text-center'>
                Accepted Payment Methods: Visa, MasterCard, PayPal
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
