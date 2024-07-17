import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleShopNow = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/products");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Navbar />
      {/* <Slider {...sliderSettings}>
        <div>
          <img
            className='slider-img'
            src='./assets/slide01.jpg'
            alt='First slide'
          />
        </div>
        <div>
          <img
            className='slider-img'
            src='./assets/slide2.jpg'
            alt='Second slide'
          />
        </div>
        <div>
          <img
            className='slider-img'
            src='./assets/slide3.jpg'
            alt='Third slide'
          />
        </div>
      </Slider> */}
    </>
  );
};

export default Home;
