import React, { Component } from "react";
import { NormalComponent } from "./NormalComponent";
export default class ComponentsContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            message:"Hello.....NormalComponent.....How Are You"
        }
    }
    render(){
        return(
            <div>
                <h2>Hello From Container Component</h2>
                <NormalComponent message={this.state.message}/>
            </div>
        )
    }
}
