import axios from "axios";
import React, { useEffect, useState } from "react";


export const UsersFun = ()=>{
    const [Users, setUsers]=useState([])
    useEffect(()=>{
        let usersurl = "https://jsonplaceholder.typicode.com/users"
        axios.get(usersurl).then(({data})=>{
            // console.log(data)
            setUsers(data)
        })
    })
    return(
        <div>
            <h1>Hello From JSON Users Function Component</h1>
            <ol>
                {Users.map((Users)=>{
                    return(
                        <li>
                            {Users.name}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}