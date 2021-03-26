import React, { Component } from 'react'

export class Input extends Component {

    constructor(props) {
        super(props)
    
        this.compoRef = React.createRef()
    }

    inputFocus = () => {
        this.compoRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.compoRef}/>
            </div>
        )
    }
}

export default Input
