import React, {Component} from "react"
import ChildComp from "./ChildComp"
import ConditionComponent from "./ConditionComponent"


export default class LifeCycleCompB extends Component{
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
        // console.log("Hello From LifeCycleCompB Constructor")
    }
    increase=()=>{
        this.setState({count:this.state.count+1})
    }
    render (){
        // console.log("Hello From LifeCycleCompB Render")
        return(
            <div>
                {/* <h2>Hello From LifeCycleCompB - {this.props.count}</h2> */}
                <button onClick={this.increase}>Increase Count</button>
                <ChildComp count={this.state.count}/>
                <hr/>
                {this.state.count < 3 && <ConditionComponent/>}
            </div>
        )
    }
}