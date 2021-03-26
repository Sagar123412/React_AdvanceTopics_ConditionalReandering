//form handing 
//macking controlled component

import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comment:'',
             topic:'ReactJS'
        }
    }
    
    userNameHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    userCommentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    userTopicHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    submitHandler = event => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefauts()
    }

    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">UserName:</label>
                    <input type="text" value={this.state.userName} onChange = {this.userNameHandler} />
                    <div>
                     <textarea name="" id="" cols="30" rows="10" value = {this.state.comment} onChange={this.userCommentHandler}></textarea>
                    </div>
                    <div>
                    <select name="" id="" value= {this.state.topic} onChange={this.userTopicHandler}>
                        <option value="react">React</option>
                        <option value="Angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                    </div>
                    <button type="submit" onSubmit={this.submitHandler}></button>
                </form>
                
            </div>
        )
    }
}

export default Form
