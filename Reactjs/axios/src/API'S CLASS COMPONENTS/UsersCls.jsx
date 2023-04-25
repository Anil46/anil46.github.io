import { Component } from "react";
import axios from "axios";

export default class UsersCls extends Component{
    constructor(){
        super();
        this.state={
            Users:[]
        }
    }
    render(){
        return(
            <div>
                <h1>Hello From Users Class Component</h1>
                <ol>
                    {this.state.Users.map((users)=>{
                        return(
                            <li>
                                {users.username}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount(){
        let Fake_Store_Users_Url = "https://fakestoreapi.com/users";
        axios.get(Fake_Store_Users_Url).then((res)=>{
            console.log(res.data)
            let anil = {...this.state};
            anil["Users"]=res.data;
            this.setState(anil)
        })
    }
}