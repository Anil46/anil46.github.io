import { Component } from "react";
import axios from "axios";


export default class AlbumCls extends Component {
    constructor() {
        super();
        this.state = {
            Album: [],
        }
    }
    render() {
        return (
            <div>
                <h1>Hello From Album Class Component</h1>
                <ol>
                    {this.state.Album.map((Album)=>{
                        return(
                            <li>
                                {Album.title}
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
    componentDidMount() {
        let albmurl = "https://jsonplaceholder.typicode.com/albums";
        axios.get(albmurl).then((res) => {
            console.log(res.data)
            let newstate = {...this.state};
            newstate["Album"]=res.data;
            this.setState(newstate)

        })

    }
}