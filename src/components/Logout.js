import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Logout = () => {
  let navigateTo = useNavigate();

  return (
    <div>
      <h2>You are logged out</h2>
      <Link to="/Login">
        <button id="btn2">Return to login</button>
      </Link>
    </div>
  );
};

export default Logout;
