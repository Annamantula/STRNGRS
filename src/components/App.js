import React, {useState, useEffect} from 'react'
import bootstrap from 'bootstrap';
import {Routes, Route,Link } from "react-router-dom"
import {NavBar, Register, Login, Logout, Profile, Posts} from './'
import "./index.css";


const App = () =>{
    const [postValue, setPostValue] = useState ('')
    
    return (
    <div>
          <NavBar />
            <Routes>
              <Route exact path = '/' element = {<div>Landing Page</div>}/>
              <Route exact path = '/Register' element = {<Register />}/>
              <Route exact path = '/Login' element = {<Login />}/>
              <Route exact path = '/Logout' element = {<Logout />}/>
              <Route exact path = '/Profile' element = {<Profile />}/>
              <Route exact path = '/Posts' element = {<Posts postValue = {postValue} setPostValue = {setPostValue}/>}/>
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

  




