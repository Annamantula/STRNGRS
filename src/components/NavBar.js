import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function NavBar({
  isLoggedIn,
  setIsLoggedIn,
  setUsername,
  setPassword,
}) {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/");
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <header className="header">
        <span className="headerLogo">
          <img src="S.T.jpg" alt="logo" className="logotoo" />
        </span>
        <div>
          {/* <h3 className="things">Stranger's Things</h3> */}
          <nav className="d-flex">
            <h4 className="mb-0"></h4>
          </nav>
        </div>
        {isLoggedIn ? (
          <div className="navBar" id="navBar">
            <Link className="tabs" to="./">
              {" "}
              Home{" "}
            </Link>
            <Link className="tabs" to="/Profile">
              {" "}
              Profile{" "}
            </Link>
            <Link className="tabs" to="/Posts">
              {" "}
              Posts{" "}
            </Link>
            <button id="btn2" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link className="tabs" to="./">
              {" "}
              Home{" "}
            </Link>
            <Link className="tabs" to="/Login">
              {" "}
              Login{" "}
            </Link>
            <Link className="tabs" to="/Register">
              {" "}
              Register{" "}
            </Link>
            <Link className="tabs" to="/Profile">
              {" "}
              Profile{" "}
            </Link>
            <Link className="tabs" to="/Posts">
              {" "}
              Posts{" "}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
