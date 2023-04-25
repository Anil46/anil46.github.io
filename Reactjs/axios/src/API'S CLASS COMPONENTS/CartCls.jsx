import { Component } from "react";
import axios from "axios";


export default class CartCls extends Component{
    constructor(){
        super();
        this.state={
            Cart:[],
        }
    }
    render(){
        return(
            <div>
                <h1>Hello From Cart Class Component</h1>
                <ol>
                    {this.state.Cart.map((Cart)=>{
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
    componentDidMount(){
        let Fake_Store_Carts_Url ="https://fakestoreapi.com/carts";
        axios.get(Fake_Store_Carts_Url).then((res)=>{
            console.log(res.data)
            let newstate = {...this.state};
            newstate["Cart"]=res.data;
            this.setState(newstate)
        })
    }
}