import React, {useState} from 'react';
import {loginUser} from '../api';
import {useNavigate} from "react-router-dom";
const Login = (props) =>{
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useNavigate()
    const handleOnChange = (event) =>{
        const updated  = event.target.id
        if (updated === 'username') {
            setUserName(event.target.value)
        }else{
            setPassword(event.target.value)
        }
    }
    
    const handleSubmit = async(event) => {
       try{
        event.preventDefault()
        const result = await loginUser(username,password)
        const token = result.data.token
        console.log(token, "login token")
        localStorage.setItem("token",token)
        navigateTo ("/profile")
    //     const tokenFromStrg = localStorage.getItem("token here")
    //     console.log("tokenFromStrg", tokenFromStrg)
    //     //  const token = await loginUser(username, password)
       }catch(err){}
    }
 return (<>
          <form action="/action_page.php" onSubmit = {handleSubmit}>
            <label> Username:</label><br></br>
            <input 
            type="text" id="uName" 
            onChange={handleOnChange}
            placeholder="User Name">
            </input><br></br>

             <label>Password:</label><br></br>
             <input 
             type="text" id="password"
             onChange={handleOnChange}
             placeholder="Password">
             </input><br></br>
             <input type="submit" value="Login"></input>
          </form>
         </>)
        }

 export default Login;