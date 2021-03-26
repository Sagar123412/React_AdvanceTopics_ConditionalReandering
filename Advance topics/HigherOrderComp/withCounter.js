//HOC is a pattern where a function takes a component as an argument and returns a new 
//component.


import React from 'react'

//Let's make HOC

const withCounter = (WrappedComponent, incrementNumber) => {
    class NewComponent extends  React.Component{

        
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementHandler = () => {
        this.setState(prevState => {
            return {count : prevState.count + incrementNumber }
        })
    }

        render() {
            return <WrappedComponent count ={this.state.count} incrementHandler = {this.incrementHandler} {...this.props} />
        }
    }
    return NewComponent
}

export default withCounter