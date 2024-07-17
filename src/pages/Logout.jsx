// Logout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../firebase";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        alert("Logout successful.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        alert("Error signing out.");
      });
  }, [navigate]);

  return null;
};

export default Logout;
