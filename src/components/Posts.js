import { useEffect, useState} from "react";
import { getPosts} from "../api"

const Posts =() => {
    const [posts, setPosts] = useState([]);


    useEffect (() => {
         getPosts.then ((response) =>{
            setPosts (response.data.posts)
        })
    },[])
    
    return(
        <div className = "posts">
            <h3> Posts</h3>
            {posts.map((post,_id)=> (
                    <div key = {post._id} id = "post">
                        <h3>Name: {post.author.username}</h3>
                        <p>ID: {post.author._id}</p>
                        <p className="post-title">{post.title}</p>
                        <p className="footer-dscrptn">{post.description}</p>
                        <p className="post-prc">{post.price}</p>
                        <p className= "post-lcn">{post.location}</p>
                        </div>
                        ))}
        </div>
    );
}
export default Posts