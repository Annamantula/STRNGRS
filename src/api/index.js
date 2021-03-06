import axios  from 'axios';

const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT_NAME = "2206-FTB-ET-WEB-FT";

export const registerUser = async (username,password) =>{
    // const registerUsername = event.target[0].value
    // const registerPassword = event.target[1].value
    console.log ("credentials",username,password)
    console.log(`${BASE_URL}${COHORT_NAME}/users/register`)
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/register`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })

    // const result = await response.json ()
    // return result
    return response
}

export  const loginUser = async(username,password) =>{
    // const loginUsername = event.target[0].value
    // const loginPassword = event.target[1].value
    // console.log ("to get login event inputs",loginUsername, loginPassword)
    // console.log(`${BASE_URL}${COHORT_NAME}/users/login`)
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/login`,
{
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: username,
      password: password,
    }
  })
})
const result = await response.json()
const token = result.data.token
return token
}
export const getUser = async (authToken) => {
  console.log(authToken,"authToken");
  try{ 
      const uData = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
      const response = await fetch (`${BASE_URL}${COHORT_NAME}/users/me`,
      {
        headers: uData
    })  
const result = await response.json()
return result
  }catch (error){
      throw error;
  }
}

export const getProfile = async (token) => {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/me`,
    {
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
        }
    })
    const result = await response.json()
    const data = result.data
    return data
}

export const getPosts =  async() => {
    try {
      const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`);
      const result = await response.json();
      return result;
    } catch (error) {
        throw error;
      console.log('Problem getting post');
    }
}


export const addPosts =  async(postDetail, token) => {
   const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`,
   {
       method: "POST",
       headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
   },
   body: JSON.stringify({
    post: {
      title: postDetail.title,
      description: postDetail.description,
      price: postDetail.price,
      willDeliver: postDetail.willDeliver,
    }
   })
}) .then ((response => response.json()))
   .then (result =>{
     console.log(result)
})
.catch (console.error)
}