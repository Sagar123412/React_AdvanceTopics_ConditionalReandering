import React, { Component } from 'react'

export class ClickCounterTwo extends Component { 
    render() {
        const { count, incrementHandler } = this.props
        return (
            <div>
                <button onClick = {incrementHandler}>Clicked { count } Times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
