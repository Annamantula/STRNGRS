import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {registerUser} from '../api';

const Register = (props) =>{
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
        const result = await registerUser(username,password)
        const token = result.data.token
        console.log(token, "register token")
        localStorage.setItem("token",token)
        navigateTo ("/profile")
        const tokenFromStrg = localStorage.getItem("token")
        console.log("tokenFromStrg", tokenFromStrg)
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
             <input type="submit" value="Register"></input>
          </form>
         </>)
        }

export default Register;