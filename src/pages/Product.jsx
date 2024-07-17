// src/pages/Product.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
      setProduct(product);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-12 py-5 text-center'>
              <Skeleton height={40} width={560} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              src={product.image}
              alt={product.title}
              height='400'
              width='400'
            />
          </div>
          <div className='col-md-6'>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead'>
              Rating {product.rating && product.rating.rate}
              <i className='fa fa-star'></i>
            </p>
            <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
            <p className='lead'>{product.description}</p>
            <button
              className='btn btn-dark px-4 py-2'
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
