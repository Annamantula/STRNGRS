import React from 'react'
import { Route, Routes} from "react-router-dom"
import {NavBar, Register, Login, Profile, Posts} from './'
const App = () =>{
    return (<>
          <NavBar />
            <Routes>
              <Route path = '/' element = {<div>Landing Page</div>}/>
              <Route path = '/register' element = {<Register />}/>
              <Route path = '/login' element = {<Login />}/>
              <Route path = '/profile' element = {<Profile />}/>
              <Route path = '/posts' element = {<Posts />}/>
            </Routes>
        </>
    );
}

 export default App 









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

  




