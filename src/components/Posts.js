import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { DestroyPosts, getPosts } from "../api";
import { Message, SearchPost } from "./";

const Posts = ({ postValue, setPostValue }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const authToken = localStorage.getItem("token") ? true : false;
  const catchId = (id) => {
    setPostValue(id);
    return postValue;
  };
  console.log(postValue, "here is your post");

  useEffect(() => {
    getPosts()
      .then((response) => {
        const posts = response.data.posts;
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function destroyPost(post_id) {
    const token1 = localStorage.getItem("token");
    const deleted = await DestroyPosts(token1, post_id);
    navigate("/Posts");
    return deleted;
  }

  const postMapping = posts.map((post, index) => {
    let postId = posts[index]._id;
    return (
      <div id="post-box" key={`posts${index}`}>
        <h3>Author:{post.author.username}</h3>
        <p>{post.author._id}</p>
        <p className="post-title">Title:{post.title}</p>
        <p className="footer-dscrptn">Description:{post.description}</p>
        <p className="post-prc">Price:{post.price}</p>
        <p className="post-lcn">Location:{post.location}</p>
        <li>
          <Message postId={postId} destroyPost={destroyPost} />
        </li>
        <li>
          {authToken === true ? (
            <button
              onClick={() => {
                catchId(post._id), destroyPost(post._id);
              }}
              type="button"
              id="btn2"
            >
              {" "}
              Delete Post
            </button>
          ) : (
            <Link to="/Login">
              <button id="btn2">Login to Interact With Posts</button>
            </Link>
          )}
        </li>
      </div>
    );
  });

  return (
    <div>
      <h1 id ="welcome">Welcome to Posts!</h1>
      <nav class="navbar navbar-dark bg-dark">
        <SearchPost
          postMapping={postMapping}
          posts={posts}
          setPosts={setPosts}
          id="srch"
        />
      </nav>
      

      {authToken === true ? (
        <Link to="/Profile">
          <button id="btn2" type="btn" className="btn">
            {" "}
            Back to Profile{" "}
          </button>
        </Link>
      ) : null}
      {postMapping}
    </div>
  );
};

export default Posts;
