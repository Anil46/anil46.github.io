import { Component } from "react";
import axios from "axios";

export default class AddressCls extends Component {
    constructor() {
        super();
        this.state = {
            Address: [],
        }
    }
    render() {
        return (
            <div>
                <h1>Hello From Address Class Component</h1>
                <ol>
                    {this.state.Address.map((Address) => {
                        return (
                            <li>
                                {Address.fname}
                                {Address.lname}
                            </li>
                        )
                    })}
                </ol>

            </div>
        )
    }
    componentDidMount() {
        let url = "http://localhost:3000/address";
        axios.get(url).then((res) => {
            console.log(res.data)
            let newState = { ...this.state };
            newState["Address"] = res.data;
            this.setState(newState)

        })
    }
}