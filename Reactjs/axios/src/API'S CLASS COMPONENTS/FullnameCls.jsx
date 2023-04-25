import  { Component } from "react";
import axios from "axios";

export default class FullnameCls extends Component{
    constructor(){
        super();
        this.state={
            FullName:[]
        }
    }
    render(){
        return(
            <div>
                <h1>Hello From Full Name Class Compoent</h1>
                <ol>
                    {this.state.FullName.map((Fullname)=>{
                        return(
                            <li>
                                {Fullname.fname}
                                {Fullname.lname}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount(){
        let url = "http://localhost:3000/fullnames";
        axios.get(url).then((res)=>{
            console.log(res.data)
            let state = {...this.state};
            state["FullName"]=res.data;
            this.setState(state)
        })
    }
}