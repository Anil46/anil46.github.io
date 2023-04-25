import axios from "axios";
import React, { useEffect, useState } from "react";

export const PhotosFUnc = ()=>{
    const [Photos, setPhotos]=useState([])

    useEffect(()=>{
        let Photosurl = "https://jsonplaceholder.typicode.com/photos"
        axios.get(Photosurl).then(({data})=>{
            // console.log(data)
            setPhotos(data)
        })
    })
    return(
        <div>
            <h1>Hello From Photos Function Component</h1>
            <ol>
                {Photos.map((Photos)=>{
                    return(
                        <li>
                            {Photos.title}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}