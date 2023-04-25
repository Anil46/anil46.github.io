import { Component } from "react";
import axios from "axios";

export default class PostsCls extends Component{
    constructor(){
        super();
        this.state={
            Posts:[]
        }
    }
    render(){
        return(
            <div>
                <h1>Hello From Posts Class Component</h1>
                <ol>
                    {this.state.Posts.map((post)=>{
                        return(
                            <li>
                                {post.title}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount(){
        let pu = "https://jsonplaceholder.typicode.com/posts";
        axios.get(pu).then((res)=>{
            console.log(res.data)
            let pc = {...this.state};
            pc["Posts"]=res.data
            this.setState(pc)
        })

    }
}