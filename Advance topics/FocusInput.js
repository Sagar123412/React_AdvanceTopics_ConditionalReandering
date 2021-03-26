import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {

    constructor(props) {
        super(props)
    
        this.compInputRef = React.createRef()
    }

    getFocus = () => {
        this.compInputRef.current.inputFocus()
    }

    
    render() {
        return (
            <div>
                <Input ref={this.compInputRef}/>
                <button onClick={this.getFocus}>Click</button>
            </div>
        )
    }
}

export default FocusInput
