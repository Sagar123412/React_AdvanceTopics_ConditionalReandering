//render props
// render props refers to a technique for sharing code 
//between React components using a prop whose value is a function. 

import React, { Component } from 'react'

class HovercounterTwo extends Component {

    render() {
        const { count, incrementHandler } = this.props
        return (
            <div>
                <h1 onMouseOver ={incrementHandler}>Hover {count} Times</h1>
            </div>
        )
    }
}

export default HovercounterTwo
