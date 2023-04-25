import axios from "axios";
import React, { useEffect, useState } from "react";

export const FullnameFunc = () => {
    const [fullname, setfullname] = useState([])
    useEffect(() => {
        let url = "http://localhost:3000/fullnames"
        axios.get(url).then(({ data }) => {
            // console.log(data)
            setfullname(data)
        })
    })
    return (
        <div>
            <h1>Hello From FIllTEXT Fullnames Function Component</h1>
            <ol>
                {fullname.map((fullname)=>{
                    return(
                        <li>
                            {fullname.fname+""+fullname.lname}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}