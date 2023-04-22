import axios from "axios";
import React, { useEffect, useState } from "react";

export const CartFunc = ()=>{
    const [Cart, setCart]= useState([])

    useEffect(()=>{
        let Fake_Store_Carts_Url ="https://fakestoreapi.com/carts"
        axios.get(Fake_Store_Carts_Url).then(({data})=>{
            // console.log(data)
            setCart(data)
    }, [])
    })
    return(
        <div>
            <h1>
                Hello From Cart Function Component
            </h1>
            <ol>
                    { Cart.map((Cart)=>{
                        return(
                            <li>
                                {Cart.date}
                            </li>
                        )
                    })}
                </ol>
        </div>
    )
}