import React from "react";
import "./Home.css"; // Ensure this file is in the same directory as Home.jsx

const Home = () => {
  return (
    <>
      <div className='hero border-1 pb-3'>
        <div className='card bg-dark text-white border-0 mx-3'>
          <img
            className='card-img img-fluid'
            src='./assets/main.png.jpg'
            alt='Card'
          />
          <div className='card-img-overlay d-flex align-items-center'>
            <div className='container text-center'>
              <h5 className='card-title fs-1 text fw-lighter'>
                New Season Arrivals
              </h5>
              <p className='card-text fs-5 d-none d-sm-block'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button className='btn btn-primary btn-lg mt-3'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
