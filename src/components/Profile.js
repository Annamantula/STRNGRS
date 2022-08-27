import React, { useState, useEffect } from "react";
import { getProfile, getUser } from "../api";
import { Message } from "./";
import { Link } from "react-router-dom";

const Profile = (props) => {
  let token = "";
  const [Info, setInfo] = useState({});

  useEffect(() => {
    token = localStorage.getItem("token");
    async function getInfo() {
      const returnedInfo = await getProfile(token);
      console.log(returnedInfo, "api> returned info");
      setInfo(returnedInfo);
    }
    getInfo();
  }, []);

  const dataInfo = Info.data;
  const myData =
    dataInfo && dataInfo.messages && dataInfo.messages.length ? (
      dataInfo.messages.map((element, index, []) => {
        return (
          <div>
            <div key={`Profile ${index}`}>
              <h1>{element.data.posts.messages}</h1>
              <h1>{element.posts.messages.content}</h1>
              <h4>From: {element.fromUser.username}</h4>
              <h4>Message: {element.content}</h4>
              <h4>Response: {element.post.title}</h4>
            </div>
          </div>
        );
      })
    ) : (
      <h4>You have no messages</h4>
    );

  // const [posts, setPosts] = useState([]);

  // useEffect (() => {
  //      getPosts.then ((response) =>{
  //         setPosts (response.data.posts)
  //     })
  // },[])
  return (
    <>
      <div className="box">
        {Info.data ? (
          <h2>Welcome {Info.data.username}</h2>
        ) : (
          <h2>Proceed to the Login page</h2>
        )}

        <Link to="/NewPost">
          <button type="button" className="btn btn-link">
            Create Post
          </button>
        </Link>
        <Link to="/Posts">
          <button type="button" className="btn btn-link">
            All Posts
          </button>
        </Link>
        <Link to="/Logout">
          <button
            id="btn2"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        </Link>

        <p>Messages:</p>
        <div id="myData">{myData}</div>
      </div>
    </>
  );
};
export default Profile;
