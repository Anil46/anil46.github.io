import axios from "axios";
import React, { useEffect, useState } from "react"


export const ProductsFunc = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        let FAKE_STORE_PRODUCTS_URL = "https://fakestoreapi.com/products";

        axios.get(FAKE_STORE_PRODUCTS_URL).then(({data}) => {
            setproducts(data)
        }, [])

    })
    const handledelete = (Product)=>{
        let balanceProducts = products.filter((prd)=>prd.id !== Product.id);
        setproducts(balanceProducts)
    }
    return (
        <div>
            <h1>Hi From Products Function Component</h1>
            <ul>
                {products.map((Product) => {
                    return (
                        <li>
                            <img src={Product.image} alt="" />
                            <button onClick={()=>{handledelete(Product)}}>Delete Product</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}