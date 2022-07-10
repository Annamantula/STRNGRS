import React, {useState, useEffect} from 'react'
import { getProfile } from '../api';
const Profile = (props) =>{
    let token = "";
    const [myInfo, setMyInfo] = useState ({})
    useEffect(() =>{
     token = localStorage.getItem("token")
     async function getInfo(){
         const returnedInfo = await getProfile(token)
         console.log (returnedInfo,"api> returned info")
         setMyInfo(returnedInfo)
     }
     getInfo()
    },[])


    // const [posts, setPosts] = useState([]);


    // useEffect (() => {
    //      getPosts.then ((response) =>{
    //         setPosts (response.data.posts)
    //     })
    // },[])
return (
    <div className = "box"> {'Welcome to'}
    <h2>Profile Page</h2>
    
    </div>
)
}
export default Profile;