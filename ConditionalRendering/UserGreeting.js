import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {

        //4 approaches to conditionaly render JSX 

        //using sort circuit method

        return this.state.isLoggedIn && <div>Welcome Sagar</div>;


        //turnary operators
        // return this.state.isLoggedIn? <div>Welcome Sagar</div> : <div>Welcome Guest</div>;




        // let message;

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Sagar</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <h1>{message}</h1>; 




        // if(this.state.isLoggedIn){
        //     return <div>Welcome Sagar</div>
        // }else{
        //     return <div>Welcome guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome Sagar</div>
        //         <div>Welcome Guest</div>
        //     </div>
            
            
        // )
    }
}

export default UserGreeting
