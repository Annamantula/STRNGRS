import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {addPosts} from "../api";

const  NewPost =() => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [willDeliver, setwillDeliver] = useState(false)

    const authToken = localStorage.getItem("token") ? true : false;


    async function handleSubmit(e){
        e.preventDefault();
    
    const token = localStorage.getItem("token");

    const postedDetails  = {
     title: title,
     description: description,
     price: price,
     location: location,
     willDeliver: willDeliver
    }
    const response = await addPosts(postedDetails, token);

    return response;
    navigate ("/Posts");
}

return(
<div class="card" style="width: 18rem;">
  <img src="https://cdn.shopify.com/s/files/1/1117/3536/products/Bracelet_900x.jpg?v=1626208340" class="card-img-top" alt="jewelery"/>
  <div class="card-body">
  {authToken === true ? (
                <>
                  <h2>Create Your Post</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        id="form2.1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="title"
                      ></input>
                      <input
                        id="form2.1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="description"
                      ></input>
                      <input
                        id="form2.1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="location"
                      ></input>
                      <input
                        id="form2.1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setPrice(event.target.value)}
                        placeholder="price"
                      ></input>
                      <button className="btn btn-dark" id="newPostButton">
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <h3>You should be logged in to Create a Post</h3>
              )}
        </div>
      </div>
      )
}

    export default NewPost