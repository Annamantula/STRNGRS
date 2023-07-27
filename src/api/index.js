import axios from "axios";

const BASE_URL = `https://strangers-things.herokuapp.com/api/`;
const COHORT_NAME = "2206-FTB-ET-WEB-FT";

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result, "resuuuultttt");
    const token = result.data.token;
    return token;
  } catch (error) {
    throw error;
  }
};
export const getUser = async (authToken) => {
  console.log(authToken, "authToken");
  try {
    const uData = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    };
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/me`, {
      headers: uData,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (token) => {
  const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  // const data = result.data
  // return data
  return result;
};

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const addPosts = async (postDetail, token) => {
  const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: postDetail.title,
          description: postDetail.description,
          price: postDetail.price,
          location: postDetail.location,
          willDeliver: postDetail.willDeliver,
        },
      }),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};

export const DestroyPosts = async (token, postId) => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Post can not be deleted", error);
  }
};
export async function sendMessage(token, postid, content) {
  const response = await fetch(
      `${BASE_URL}${COHORT_NAME}/posts/${postid}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: content,
          },
        }),
      }
    )
    .then((resposne) => response.json())
    .then((result) => {
      console.log(result, "Message");
    })
    .catch(console.error);
}