import React, { Component } from "react";

export const HOComp = (OrginalComponent) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
        handleClick = () => {
            this.setState({ count: this.state.count + 1 })
        }
        render() {
            return <OrginalComponent count={this.state.count} handleClick={this.handleClick} />  
        }
    }
    return NewComponent
}