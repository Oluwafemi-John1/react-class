import axios from 'axios'
import React, { useState } from 'react'

const Fetch = () => {
    const endpoint = "https://jsonplaceholder.typicode.com/users";
    const endpoint2 = "https://jsonplaceholder.typicode.com/posts";
    const endpoint3 = "https://api.github.com/users";
    const [response, setresponse] = useState([])

    const getData = () => {
        // alert("I am working")
        axios.get(endpoint3)
        .then((result)=>{
            console.log(result.data);
            setresponse(result.data)
            // console.log(results);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <>
        <h1>Fetch API</h1>
        <button onClick={getData}>Get info</button>

        {
            response.map((item)=>(
                <div key={item.id}>
                    <div>{item.id}</div>
                    <div>{item.login}</div>
                    <img src={item.avatar_url} alt="" />
                </div>

            ))
        }
    </>
  )
}

export default Fetch