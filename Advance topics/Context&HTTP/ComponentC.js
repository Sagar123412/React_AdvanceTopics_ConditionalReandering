//Context is used to pass data from the any component to the destination componet
//without navigating to each and every nested component

import React, { Component } from 'react'
import ComponentE from './ComponentE'

export class ComponentC extends Component {
    render() {
        return (
            <div>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC
