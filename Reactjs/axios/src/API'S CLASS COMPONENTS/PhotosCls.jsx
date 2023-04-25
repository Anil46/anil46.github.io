import { Component } from "react";
import axios from "axios";

export default class PhotosCls extends Component{
    constructor(){
        super();
        this.state={
            Photos:[]
        }
    }
    render(){
        return(
            <div>
                <h1>Hello From Photos Class Component</h1>
                <ol>
                    {this.state.Photos.map((photo)=>{
                        return(
                            <li>
                                {photo.title}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount(){
        let Photosurl = "https://jsonplaceholder.typicode.com/photos";
        axios.get(Photosurl).then((res)=>{
            console.log(res.data)
            let PHP = {...this.state};
            PHP["Photos"]=res.data;
            this.setState(PHP)
        })

    }
}