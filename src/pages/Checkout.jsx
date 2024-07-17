import React, { useState, useEffect, useCallback } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart.items || []);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    ccName: "",
    ccNumber: "",
    ccExpiration: "",
    ccCVV: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    console.log(id, value);
  };

  const validateForm = useCallback(() => {
    const {
      firstName,
      lastName,
      email,
      address,
      country,
      state,
      city,
      ccName,
      ccNumber,
      ccExpiration,
      ccCVV,
    } = formValues;

    setIsFormValid(
      firstName &&
        lastName &&
        email &&
        address &&
        country &&
        state &&
        city &&
        ccName &&
        ccNumber &&
        ccExpiration &&
        ccCVV
    );
  }, [formValues]);

  useEffect(() => {
    validateForm();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle successful form submission
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const EmptyCart = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 py-5 bg-light text-center'>
            <h4 className='p-3 display-5'>No item in Cart</h4>
            <Link to='/' className='btn btn-outline-dark mx-4'>
              <i className='fa fa-arrow-left'></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <div className='container py-5'>
          <div className='row my-4'>
            <div className='col-md-5 col-lg-4 order-md-last'>
              <div className='card mb-4'>
                <div className='card-header py-3 bg-light'>
                  <h5 className='mb-0'>Order Summary</h5>
                </div>
                <div className='card-body'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                      Products ({totalItems})
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-center px-0'>
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-md-7 col-lg-8'>
              <h4 className='mb-3'>Billing address</h4>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label htmlFor='firstName' className='form-label'>
                        First Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='firstName'
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label htmlFor='lastName' className='form-label'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='lastName'
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='address' className='form-label'>
                    Address
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    value={formValues.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='address2' className='form-label'>
                    Address 2 (Optional)
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address2'
                    value={formValues.address2}
                    onChange={handleInputChange}
                  />
                </div>

                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label htmlFor='country' className='form-label'>
                        Country
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='country'
                        value={formValues.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label htmlFor='state' className='form-label'>
                        State
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='state'
                        value={formValues.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-3'>
                  <label htmlFor='city' className='form-label'>
                    City
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='city'
                    value={formValues.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <hr className='my-4' />

                <h4 className='mb-3'>Payment</h4>

                <div className='mb-3'>
                  <label htmlFor='ccName' className='form-label'>
                    Name on Card
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='ccName'
                    value={formValues.ccName}
                    onChange={handleInputChange}
                    required
                  />
                  <small className='text-muted'>
                    Full name as displayed on card
                  </small>
                </div>

                <div className='mb-3'>
                  <label htmlFor='ccNumber' className='form-label'>
                    Credit Card Number
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='ccNumber'
                    value={formValues.ccNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label htmlFor='ccExpiration' className='form-label'>
                        Expiration
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='ccExpiration'
                        value={formValues.ccExpiration}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='mb-3'>
                      <label htmlFor='ccCVV' className='form-label'>
                        CVV
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='ccCVV'
                        value={formValues.ccCVV}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <hr className='my-4' />

                <button
                  className='w-100 btn btn-dark btn-lg'
                  type='submit'
                  disabled={!isFormValid}
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className='container my-3 py-3'>
        <h1 className='text-center'>Checkout</h1>
        <hr />
        {state.length > 0 ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
