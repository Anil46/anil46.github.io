import React, { Component } from "react";
import { HOComp } from "./HOComp";

 class ClickCounter extends Component {
    render() {
        let {handleClick, count, someinfo} = this.props
        return (
            <div>
                <button onClick={handleClick}>Click Me</button>
                <h1>You Clicked {count} times</h1>
                <p>{someinfo}</p>
            </div>
        )
    }
}
export default HOComp(ClickCounter)