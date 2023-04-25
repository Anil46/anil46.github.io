import axios from "axios";
import { Component } from "react";

export default class Products extends Component {
    constructor() {
        super();
        this.state = {
            Products: [],
        }
    }
    
    render() {
        return (
            <div>
                <h2>Welcom To Products Class Component</h2>
                <ul>
                    {this.state.Products.map((Product) => {
                        return (
                            <li>
                                <img src={Product.image} alt="" />
                               
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        let FAKE_STORE_PRODUCTS_URL = "https://fakestoreapi.com/products"
        axios.get(FAKE_STORE_PRODUCTS_URL).then((res) => {
            console.log(res.data)
            let newState = { ...this.state };
            newState["Products"] = res.data;
            this.setState(newState)
        })
    }
}

