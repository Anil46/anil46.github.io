import axios from "axios";
import React, { useEffect, useState } from "react";

export const UsernameFunc=()=>{

    const[username, setusername]=useState([])
    useEffect(()=>{
        let url = "http://localhost:3000/username"
        axios.get(url).then(({data})=>{
            // console.log(data)
            setusername(data)
        })
    })
    return(
        <div>
            <h1>Hello From Fill Text Username Fucntion Component</h1>
            <ol>
                {username.map((username)=>{
                    return(
                        <li>
                            {username.username}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}