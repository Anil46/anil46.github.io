import { Component } from "react";


export default class ConditionComponent extends Component{
    componentWillUnmount(){
        alert("I am going to be removed now")
    }
    render(){
        return(
            <div>Hello AM I Visible Now</div>
        )
    }
}