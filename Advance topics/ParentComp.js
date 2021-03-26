import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'sagar'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Sagar'
            })
        }, 2000)
    }

    render() {
        console.log('parent comp render');
        return (
            <div>
                <MemoComp name = {this.state.name} />
               Parent Component 
               {/* <RegularComp name={this.state.name} /> */}
               {/* <PureComp name= {this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
