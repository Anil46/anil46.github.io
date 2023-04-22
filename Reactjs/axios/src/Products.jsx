import React, { Component } from "react";

export default class Products extends Component{
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    render(){
        return(
            <div>
                <h2>Welcome To Products Class Component</h2>
            </div>
        )
    }
}