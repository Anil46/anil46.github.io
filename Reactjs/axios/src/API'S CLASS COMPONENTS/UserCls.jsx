import { Component } from "react";
import axios from "axios";

export default class UserCls extends Component{
    constructor(){
        super();
        this.state={
            User:[]
        }
    }
    render(){
        return (
            <div>
                <h1>Hello From User Class Component</h1>
                <ol>
                    {this.state.User.map((user)=>{
                        return(
                            <li>
                                {user.name}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount(){
        let usersurl = "https://jsonplaceholder.typicode.com/users";
        axios.get(usersurl).then((res)=>{
            console.log(res.data)
            let USER = {...this.state};
            USER["User"]=res.data;
            this.setState(USER)
        })
    }
}