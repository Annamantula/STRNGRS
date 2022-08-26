import React, {useState} from 'react';
import { getPosts } from '../api';

const  SearchPost =({posts, setPosts, getPosts}) => {
    const [searchData, setSearchData] =useState("");

    const MatchingPosts = (post,text) =>{
        const response = post.title.includes(text);
        return response
    }

    const handleSubmit = () =>{
        const PostFilter = posts.filter((post) => MatchingPosts(post,searchData));
        setPosts(PostFilter);
        if (searchData.length){
            getPosts();
        }
    }
     return (

        <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <form
          id="search"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="input-group input-group-sm mb-3"
        >
          <label>Search The Post: </label>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            id="messageInput"
            aria-label="Search-Post"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          ></input>
        </form>
      </div>
    </nav>
  );
}



export default SearchPost