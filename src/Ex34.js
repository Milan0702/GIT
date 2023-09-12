import axios from 'axios';
import React, { useEffect, useState } from 'react'
const baseURL="https://dog.ceo/api/breeds/image/random";
const Ex34 = () => {
    const [post,setPost]=useState("");
    useEffect(()=>{
        axios
        .get(baseURL)
        .then((response)=>{
            setPost(response.data);
        })
        .catch((error)=>{
            console.error(error)
        });
    });
  return (
    <div>
        <img src={post.message} width="500px" height="500px"/>
    </div>
  )
}

export default Ex34