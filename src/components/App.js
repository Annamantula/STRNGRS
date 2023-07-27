import React, { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import {
  Register,
  Login,
  Logout,
  Message,
  Profile,
  Posts,
  NavBar,
  NewPost,
  SearchPost,
  Home,
} from "./";
import { getPosts } from "../api";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Info, setInfo] = useState([]);
  const [posts, setPosts] = useState("");
  const [postValue, setPostValue] = useState([]);
  const [messages, setMessages] = useState([]);

  // async function getPosts(){
  //   const fetchPosts = await getPosts();
  //   setPosts(getPosts)
  // };
  useEffect(() =>{
    getPosts();
  },[])
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <NavBar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUsername={setUsername}
        setPassword={setPassword}
      />

      <div>
        {isLoggedIn ? (
          <Routes>
            <Route exact 
            path="/Home" 
            element={
            <Home 
            />
            } 
            />
            <Route
              exact
              path="/Profile"
              element={
                <Profile
                  Info={Info}
                  setInfo={setInfo}
                  username={username}
                  messages={messages}
                  setMessages={setMessages}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              exact
              path="/Posts"
              element={
                <Posts
                  posts={posts}
                  setPosts={setPosts}
                  postValue={postValue}
                  setPostValue={setPostValue}
                />
              }
            />
             <Route
                exact
                path="/NewPost"
                element={
                  <NewPost
                    posts={posts}
                    setPosts={setPosts}
                    postValue={postValue}
                    setPostValue={setPostValue}
                  />
                }
              />
            <Route exact path="/SearchPost" element={<SearchPost />} />
            <Route  
                exact 
                path="/Message"  
                   element={
                      <Message
                      messages ={messages}
                      setMessages = {setMessages}
                    />
                  }
              />
            <Route exact path="/Logout" element={<Logout />} />
          </Routes>
        ) : (
          <div>
            <Routes>
            <Route exact 
            path="/Home" 
            element={
            <Home 
            />
            } 
            />
              <Route
                exact
                path="/Login"
                element={
                  <Login
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route
                exact
                path="/Register"
                element={
                  <Register
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route
                exact
                path="/Posts"
                element={
                  <Posts
                    posts={posts}
                    setPosts={setPosts}
                    postValue={postValue}
                    setPostValue={setPostValue}
                  />
                }
              />
            <Route
                exact
                path="/NewPost"
                element={
                  <NewPost
                    posts={posts}
                    setPosts={setPosts}
                    postValue={postValue}
                    setPostValue={setPostValue}
                  />
                }
              />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
