import React, { Component } from "react"
import LifeCycleCompB from "./LifeCycleCompB";


export default class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log("I am from Constructor")
    }

    static getDerivedStateFromProps(state,props){
        console.log("I am from getDerivedStateFromProps",state,props)
        return null
    }


    changecount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount(){
        console.log("I am from componentDIdMount")
    }
    render() {
        console.log("I am from Render")
        return (
            <div>
                <h2>Hello From LifeCycleComp</h2>
                <button onClick={this.changecount}>Change Count</button>
                {/* <LifeCycleCompB count={this.state.count}/> */}
            </div>
        )
    }
}