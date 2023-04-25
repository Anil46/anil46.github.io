import axios from "axios";
import React, { useEffect, useState } from "react";

export const CmtFunc = ()=>{
    const[Comment,setComments]=useState([])

    useEffect(()=>{
        let cmul = "https://jsonplaceholder.typicode.com/comments"
        axios.get(cmul).then(({data})=>{
            // console.log(data)
            setComments(data)
        })
    })
    return (
        <div>
            <h1>Hello From Comment Function Component</h1>
            <ol>
                {Comment.map((Comment)=>{
                    return(
                        <li>
                            {Comment.name}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}