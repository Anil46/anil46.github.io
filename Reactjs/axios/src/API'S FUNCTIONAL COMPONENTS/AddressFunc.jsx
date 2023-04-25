import axios from "axios";
import React, { useEffect, useState } from "react";

export const AddressFunc = ()=>{
    const[address, setaddress]=useState([])
    useEffect(()=>{
        let url = "http://localhost:3000/address"
        axios.get(url).then(({data})=>{
            // console.log(data)
            setaddress(data)
        })
    })
    return(
        <div>
            <h1>Hello From Fill Text Address Function Component</h1>
           <ol>
           {address.map((address)=>{
                return(
                    <li>
                        {address.fname}
                        {address.lname}
                        {/* {address.city} */}
                    </li>
                )
            })}
           </ol>
        </div>
    )
}