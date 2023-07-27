import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

function NavBar({
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
          {/* <h3 className="things">Stranger's Things</h3> */}
          <nav className="d-flex">
            <h4 className="mb-0"></h4>
          </nav>
    
        {isLoggedIn ? (
             <div className="navBar" id="navBar">
             <NavLink className="tabs" to="/Home">
               Home
               </NavLink>
            <NavLink className="tabs" to="/Profile">
              Profile
            </NavLink>
            <NavLink className="tabs" to="/Posts">
              Posts
            </NavLink>
            <button id="btn2" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <NavLink className="tabs" to="/Home">
              Home
            </NavLink>
            <NavLink className="tabs" to="/Login">
              Login
            </NavLink>
            <NavLink className="tabs" to="/Register">
              Register
            </NavLink>
            <NavLink className="tabs" to="/Posts">
              Posts
            </NavLink>
          </div>
        )}
      </header>
    </>
  );
}

export default NavBar;