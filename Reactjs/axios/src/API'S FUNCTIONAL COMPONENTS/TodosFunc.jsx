import axios from "axios";
import React, { useEffect, useState } from "react";

export const TodosFunc=()=>{
    const [Todos,setTodos]=useState([])

    useEffect(()=>{
        let todourl = "https://jsonplaceholder.typicode.com/todos"
        axios.get(todourl).then(({data})=>{
            // console.log(data)
            setTodos(data)
        })
    })
    return(
        <div>
            <h1>Hello From Todos Fucntion Component</h1>
            <ol>
                {Todos.map((Todos)=>{
                    return(
                        <li>
                            {Todos.title}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}