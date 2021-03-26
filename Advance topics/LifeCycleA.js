//Mounting life cycle methods
//see that how each and every line of code get executed
// and update life cycle methods

//we also have "unmounting phase method" only one componentWillUnmount()
//Error Handling phase method = two method 
//1. getDerivedStateFromError(error) 2. componentDidCatch(error, info)

import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'kuchh bhi'
        }

        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDrivedStateFromProps')
        return null
    }
    


    componentDidMount(){
        console.log('LifecycleA componentDidmount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycleA getSnapshotBeforeupdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }

    changeState = () =>{
        this.setState({
            name:'Codevolution'
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onChange = {this.changeState} >Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
