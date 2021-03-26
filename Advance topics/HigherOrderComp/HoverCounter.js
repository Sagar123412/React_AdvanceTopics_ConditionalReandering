//HOC is a pattern where a function takes a component as an argument and returns a new 
//component.

import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {


    render() {
        const { count, incrementHandler, name } = this.props
        return (
            <div>
                <h1 onMouseOver = {incrementHandler}> {name} Hover {count} Times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
