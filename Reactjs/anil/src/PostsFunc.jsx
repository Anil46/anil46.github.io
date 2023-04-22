import axios from "axios";
import React, { useEffect, useState } from "react";


export const PostsFunc = ()=>{
    const [Posts,setPosts]=useState([])

    useEffect(()=>{
        let pu = "https://jsonplaceholder.typicode.com/posts"
        axios.get(pu).then(({data})=>{
            // console.log(data)
            setPosts(data)
        })
    })
    return(
        <div>
            <h1>Hello From Posts Function Component</h1>
            <ol>
                {Posts.map((Posts)=>{
                    return(
                        <li>
                            {Posts.title}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}