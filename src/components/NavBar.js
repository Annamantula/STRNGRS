import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header>
        <div className="navBar" id="navBar">
          <Link to="./"> Main </Link>
          <Link to="/Register"> Register </Link>
          <Link to="/Login"> Login </Link>
          <Link to="/Profile"> Profile </Link>
          <Link to="/Posts"> Posts </Link>
        </div>
      </header>
      <div className="p-5 bg-light mb-4">
        <h3 className="things">Stranger's Things</h3>
        <nav className="d-flex">
          <h4 className="mb-0"></h4>
        </nav>
      </div>
    </>
  );
}
