import React, { Component } from "react";

export default class ChildInputRef extends Component{

    showWelcomeMessage =()=>{
        alert("Hey I Am From CHildInputRef Component")
    }
    render(){
        return(
            <div>
                <input type="text" />
            </div>
        )
    }
}