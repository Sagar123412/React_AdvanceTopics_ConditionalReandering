import React, { Component } from 'react'
import ChildCompo from './ChildCompo'

export class ParentCompo extends Component {

    constructor(){
        super()

        this.state = {
            parentName:'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(ChildName){
        alert(`hello ${this.state.parentName} from ${ChildName}`)
    }

    render() {
        return (
            <div>
               <ChildCompo greetHandler ={this.greetParent} /> 
            </div>
        )
    }
}

export default ParentCompo
