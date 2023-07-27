import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPosts } from "../api";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setwillDeliver] = useState(false);
  const navigate = useNavigate();

  const authToken = localStorage.getItem("token") ? true : false;

  const handleSubmit =  async (e) =>{
    e.preventDefault();
    const token = localStorage.getItem("token");

    const postedDetails = {
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver,
    };

    const response = await addPosts({
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver,
      token: token,
    });

    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setwillDeliver("");
    setRefresh(!refresh);
    navigate("/Posts");
    return response;
  }

  return (
    <div className="card" style="width: 18rem;">
      <div className="card-body">
        {authToken === true ? (
          <>
            <h2>Create Your Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="inpt">
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="title"
                  id="form"
                  className="form-c"
                ></input>
                <input
                  id="form"
                  className="form-c"
                  type="text"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="description"
                ></input>
                <input
                  id="form"
                  className="form-c"
                  type="text"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder="price"
                ></input>
                <input
                  id="form"
                  className="form-c"
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="location"
                ></input>
                <button className="btn btn-dark" id="btn2">
                  Submit New Post
                </button>
              </div>
            </form>
          </>
        ) : (
          <h3>You should be logged in to Create a Post</h3>
        )}
      </div>
    </div>
  );
};

export default NewPost;
