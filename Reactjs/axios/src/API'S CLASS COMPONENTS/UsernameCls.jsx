import { Component } from "react";
import axios from "axios";

export default class UsernameCls extends Component{
    constructor(){
        super();
        this.state={
            Username:[]
        }
    }
    render(){
        return(
            <div>
                <h1>Hello From UserName Class Component</h1>
                <ol>
                    {this.state.Username.map((username)=>{
                        return(
                            <li>
                                {username.username}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount(){
        let url = "http://localhost:3000/username";
        axios.get(url).then((res)=>{
            console.log(res.data)
            let stan = {...this.state};
            stan["Username"]=res.data;
            this.setState(stan)
        })
    }
}