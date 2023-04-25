import { Component } from "react";
import axios from "axios"

export default class TodosCls extends Component{
    constructor(){
        super();
        this.state={
            Todos:[]
        }
    }
    render(){
        return(
            <div>
                <h1>Hello From Todos Class Component</h1>
                <ol>
                    {this.state.Todos.map((todo)=>{
                        return(
                            <li>
                                {todo.title}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount(){
        let todourl = "https://jsonplaceholder.typicode.com/todos";
        axios.get(todourl).then((res)=>{
            console.log(res.data)
            let tos = {...this.state};
            tos["Todos"]=res.data;
            this.setState(tos)
        })
    }
}