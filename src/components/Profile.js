import React, {useState, useEffect} from 'react'
import { getProfile, getUser } from '../api';
import {Logout} from './'
import { Link } from 'react-router-dom';

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
    
    const dataInfo = myInfo.data
    const myData = dataInfo && dataInfo.length ? dataInfo.map((element, index, []) =>{
        return (
            <div>
                <div key = {`Profile ${index}`}><button>
                    <h1>{element.data.posts.messages}</h1>
                    <h1>{element.posts.messages.content}</h1>
                    </button>
                 </div>
            </div>
        );

    }):null;

    // const [posts, setPosts] = useState([]);


    // useEffect (() => {
    //      getPosts.then ((response) =>{
    //         setPosts (response.data.posts)
    //     })
    // },[])
return (
    <div className = "box">
      <h2>Welcome to your Profile</h2>
        <div id = "myData">{myData}<h3>My messages</h3></div>
        <div id = "myPosts"><h3>My Posts</h3></div>
      <Link to = '/Logout'> 
        < button onClick={()=>{localStorage.removeItem("token");}}>Logout</button>
      </Link>
     </div>
)
}
export default Profile;