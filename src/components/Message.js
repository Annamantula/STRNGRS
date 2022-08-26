import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {sendMessage} from "../api";

export default function Message (props){
    const navigate = useNavigate();
    const {postId} = props;

    const handleSubmit = (e) =>{
      e.preventDefault();
        const text = e.target[0].value;
        const token = localStorage.getItem("token")
        sendMessage (token, postId, content);
        navigate ('/Profile');
    };
    return(
      <form onSubmit={handleSubmit} id = "message">
        <div className = "message-input">
          <label className ="message"> Message:</label>
            <input id = "message-text" type = "text"
                placeholder="Your Message">
            </input>   
            <button type="button" class="btn btn-light">Post Message</button>      
         </div>
       </form>
    )
}

