import React, { Component } from "react";
import { HOComp } from "./HOComp";

 class HoverConter extends Component {

    render() {
        let {handleClick, count} = this.props
        return (
            <div>
                <h1 onMouseOver={handleClick}>You Hovered{count}</h1>
            </div>
        )
    }
}

export default HOComp(HoverConter)