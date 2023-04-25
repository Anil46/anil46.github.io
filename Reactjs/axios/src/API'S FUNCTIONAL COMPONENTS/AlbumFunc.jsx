import axios from "axios";
import React, { useEffect, useState } from "react";


export const AlbumFunc = ()=>{
    const [Albums, setAlbums]=useState([])

    useEffect(()=>{
        let albmurl = "https://jsonplaceholder.typicode.com/albums"
        axios.get(albmurl).then(({data})=>{
            // console.log(data)
            setAlbums(data)
        })
    })
    return (
        <div>
            <h1>Hello From Album Function Component</h1>
            <ol>
            {Albums.map((Albums)=>{
                return(
                    <li>
                        {Albums.title}
                    </li>
                )
            })}
            </ol>
        </div>
    )
}