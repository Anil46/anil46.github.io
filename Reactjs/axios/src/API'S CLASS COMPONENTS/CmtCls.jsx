import { Component } from "react";
import axios from "axios";

export default class CmtCls extends Component{
    constructor(){
        super();
        this.state = {
            Comment:[],
        }
    }
    render(){
        return(
            <div>
                <h1>Hello From Comment Class Component</h1>
                <ol>
                    {this.state.Comment.map((Comment)=>{
                        return(
                            <li>
                                {Comment.name}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount(){
        let cmul = "https://jsonplaceholder.typicode.com/comments";
        axios.get(cmul).then((res)=>{
            console.log(res.data)
            let Nstate = {...this.state};
            Nstate["Comment"]=res.data;
            this.setState(Nstate)
        })
    }
}