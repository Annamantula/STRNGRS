import React from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "../api";

const Message =(props) => {
  const navigate = useNavigate();
  const {postId} = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target[0].value;
    const token = localStorage.getItem("token");
    sendMessage(token, postId, content);
    navigate("/Profile");
  };
  return (
    <form id="message" onSubmit={handleSubmit} >
      <div className="message-input">
        <label className="message"> Message:</label>
        <input id="inpt" type="text" placeholder="Your Message"></input>
        <button type="button" id="btn2" className=" btn-light">
          Post Message
        </button>
      </div>
    </form>
  );
}
export default Message;
