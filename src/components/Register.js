import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {registerUser} from '../api';

export const BASE_URL = "https://strangers-things.herokuapp.com/api/";
export const COHORT_NAME = "2206-FTB-ET-WEB-FT";

const Register = () =>{
    const [newUsername, setNewUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let navigateTo = useNavigate();

    // const handleOnChange = (event) =>{
    //     const updated  = event.target.id
    //     if (updated === 'username') {
    //         setUserName(event.target.value)
    //     }else{
    //         setPassword(event.target.value)
    //     }
    // }
    
    const handleSubmit = async(event) => {
        event.preventDefault()
        try{
        const result = await registerUser(newUsername,password)
        const token = result.data.token
        console.log(token, "register token")
        localStorage.setItem("token",token)
        navigateTo ("/Login")

        // const tokenFromStrg = localStorage.getItem("token")
        // console.log("tokenFromStrg", tokenFromStrg)


    //     //  const token = await loginUser(username, password)
       }catch(err){}
    }
 return (<>
          <form action="/action_page.php" onSubmit = {handleSubmit}>
            <h1>Register</h1>
            <label> Username:</label><br></br>
            <input 
            type="text" id="NewUName" 
            // onChange={handleOnChange}
            onChange={ event => setNewUserName(event.target.value)}
            placeholder="New User Name">
            </input><br></br>

             <label>Password:</label><br></br>
             <input 
             type="text" id="password"
             onChange={ event => setPassword(event.target.value)}
             placeholder="Password">
            </input><br></br>

            <label>Confirm Password:</label><br></br>
            <input 
            type="text" id="password"
            onChange={ event => setConfirmPassword(event.target.value)}
            placeholder="Confirm Password">
             </input><br></br>

             <input type="submit" value="Register"></input>
             
             
          </form>
         </>)
        }

export default Register;