import { Component } from "react";
import Child from "./Child";

export class Naresh extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome To Naresh Component",
            welcomeMsg: "Hello 10K Coders.. Welcome To ReactJs Trainging"
        }
    }
    render() {
        return <div>
            <button onClick={() => { this.setState({ message: "Hello Naresh... I Have Changed" }) }}>Change Message</button>

            {/* <Child
             msg={this.state.message}
             welc={this.state.welcomeMsg} /> */}

             <Child{...this.state}/>
        </div>
    }
}