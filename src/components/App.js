import React, {useState, useEffect} from 'react'
import {Routes, Route, Link } from "react-router-dom"
import {Register, Login, Logout, Message,  Profile, Posts, NavBar, NewPost, SearchPost} from './'
import "./index.css";


const App = () =>{
    const [posts, setPosts] = useState ('');
    const [postValue, setPostValue] = useState ([])
    const [messages, setMessages] = useState ([]);
    
    return (
    <div>
          <NavBar />
            <Routes>
              <Route exact path = '/Register' element = {<Register />}/>
              <Route exact path = '/Login' element = {<Login />}/>
              <Route exact path = '/Profile' element = {<Profile messages = {messages} setMessages = {setMessages}/>}/>
              <Route exact path = '/Posts' element = {<Posts posts = {posts} setPosts = {setPosts} postValue = {postValue} setPostValue = {setPostValue}/>}/>
              <Route exact path = '/NewPost' element = {<NewPost/>}/>
              <Route exact path = '/SearchPost' element = {<SearchPost/>}/>
              <Route exact path = '//Message' element = {<Message/>}/>
              <Route exact path = '/Logout' element = {<Logout />}/>
            </Routes>
    </div>
    );
};

 export default App; 









//this is for api>index.js!!!!!!!!!!!!MOVE IT




//this is for component file
// async function handleSubmit(event){
//     event.preventDefault()
//     console.log("this is event",event)
//     const fromApi = await registerUser(event)
   
// }
// !!!BELOW SUPPOSED TO BE MOVED"""
// export default function App() {
//  return (<>
//     <form action="/action_page.php" onSubmit = {handleSubmit}>
//      <label> User name:</label><br></br>
//      <input type="text" id="uName" placeholder="User Name"></input><br></br>
//    <label>Password:</label><br></br>
//    {/* <input type="text" id="password" placeholder="Password"></input><br></br>
//    <input type="submit" value="Register"></input><br></br> */}
//    <input type="text" id="password" placeholder="Password"></input><br></br>
//    <input type="submit" value="Login"></input>
 
//  </form>
//  </>)
// }

  




