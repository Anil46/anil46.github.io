import { Component } from "react";


export default class ChildComp extends Component {
    constructor(props) {
        super(props)
        console.log("I am From Constructor- from ChildComp")
        this.state={}
    }
    static getDerivedStateFromProps(state,props){
        console.log("I am from getDerivedStateFromProps",state,props)
        return null
    }
    shouldComponentUpdate(){
        console.log(" I am from shouldComponentUpdate- from ChildComp")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("i am from  getSnapshotBeforeUpdate- from ChildComp")
        return null
    }
    componentDidUpdate(){
        console.log("i am from  componentDidUpdate- from ChildComp")
    }


    render() {
        console.log("i am from render- from ChildComp")
        return (
            <div>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}