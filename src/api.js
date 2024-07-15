// src/api.js
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = () => {
  return axios.get(`${BASE_URL}/products`);
};

export const fetchProduct = (id) => {
  return axios.get(`${BASE_URL}/products/${id}`);
};
