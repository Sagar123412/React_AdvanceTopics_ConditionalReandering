import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {


    render() {
        const { count, incrementHandler, name } = this.props
        return (
            <div>
                <button onClick = {incrementHandler}> {name} Clicked {count} Times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
