import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

export const BASE_URL = "https://strangers-things.herokuapp.com/api/";
export const COHORT_NAME = "2206-FTB-ET-WEB-FT";

const Register = () => {
  const [newUsername, setNewUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await registerUser(newUsername, password);
      const token = result.data.token;
      console.log(token, "register token");
      localStorage.setItem("token", token);
      navigateTo("/Login");
      

      const tokenFromStrg = localStorage.getItem("token")
      console.log("tokenFromStrg", tokenFromStrg)

    } catch (err) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label id="LoginTxt">Register</label>
        <div>
        <label  id="inpt2"> Username:</label>
        <br></br>
        <input
          id="inpt2"
          type="text"
          // onChange={handleOnChange}
          onChange={(event) => setNewUserName(event.target.value)}
          placeholder="New User Name"
        ></input>
        <br></br>

        <label  id="inpt2">Password:</label>
        <br></br>
        <input
          id="inpt2"
          type="text"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        ></input>
        <br></br>

        <label  id="inpt2">Confirm Password:</label>
        <br></br>
        <input
          id="inpt2"
          type="text"
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Confirm Password"
        ></input>
        <br></br>
        <input id="btn3" type="submit" value="Register"></input>
        </div>
      </form>
    </>
  );
};

export default Register;