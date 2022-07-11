import { useEffect, useState} from "react";
import { Routes, Route, Link, useNavigate} from "react-router-dom";
import { getPosts} from "../api"
// import { deletePosts} from "../api"

import './Posts.css'

    const  Posts =({postValue, setPostValue}) => {
      const [posts, setPosts] = useState([]);
      const navigate = useNavigate();
      const catchId = (id) => {
          setPostValue(id)
          return postValue
      }
      console.log (postValue, "here is your post")


    useEffect (() => {
         getPosts().then ((response) =>{
             const posts = response.data.posts
             setPosts (posts);
            })
            .catch((error) => {
                console.log (error);
            })
    },[]);
    

    const postMapping = posts.map((post,index)=> {
        return (
            <div id = "post-box" key = {`App${index}`}>
                <h3>{post.author.username}</h3>
                <p>{post.author._id}</p>
                <p className="post-title">{post.title}</p>
                <p className="footer-dscrptn">{post.description}</p>
                <p className="post-prc">{post.price}</p>
                <p className= "post-lcn">{post.location}</p>
                <button onClick = {() =>{catchId(post._id), deletePost()}}>Delete</button>
             </div>
                )
        })
      return(
        <div>
             {postMapping}
         </div>
              
 )}                   
        
export default Posts;