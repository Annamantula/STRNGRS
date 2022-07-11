import React, {useState} from 'react';
import {loginUser} from '../api';
import {useNavigate} from "react-router-dom";

 const Login = (props)=>{

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let navigateTo = useNavigate();

    const handleOnChange = (event) =>{
        const updated  = event.target.id
        if (updated === 'username') {
            console.log(username, "assigned name")
            setUserName(event.target.value)
        
        }else{
            console.log(password, "assigned password")
            setPassword(event.target.value)   
        }
    }
    
    const handleSubmit = async(event) => {
        // try{
        event.preventDefault()
        const token = await loginUser(username,password)
           console.log (username,password, "assigned username & pw")
        // const result = await loginUser(username,password);
        // const token = result.data.token
        
            console.log(token, "login token")
        localStorage.setItem("token",token)
        navigateTo ("/Profile")


    //     const tokenFromStrg = localStorage.getItem("token here")
    //     console.log("tokenFromStrg", tokenFromStrg)
    //     //  const token = await loginUser(username, password)
        // }catch(err){}
    };
 return (<>
          <form action="/action_page.php" onSubmit = {handleSubmit}>
            <label> Username:</label><br></br>
            <input 
            type="text" id="username" 
            onChange={handleOnChange} 
            placeholder="User Name"
            value = {username}
            /><br></br>

             <label>Password:</label><br></br>
             <input 
             id="password"
             onChange={handleOnChange}
             placeholder="Password"
             value = {password}
             type="text"
             /><br></br>
             <input type="submit" value="Login"></input>
          </form>
         </>)
        }

 export default Login;