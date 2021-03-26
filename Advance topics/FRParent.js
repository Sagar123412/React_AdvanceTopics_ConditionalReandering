import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParent extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default FRParent
