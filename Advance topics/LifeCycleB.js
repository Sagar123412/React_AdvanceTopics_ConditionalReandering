import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             nameB:'kuchh bhi'
        }

        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDrivedStateFromProps')
        return null
    }
    


    componentDidMount(){
        console.log('LifecycleB componentDidmount');
    }
     shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('lifecycleB getSnapshotBeforeupdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
    }

    render() {
        console.log('renderB')
        return (
            <div>
                LifeCycleB Render
            </div>
        )
    }
}

export default LifeCycleB
