import React, { Component } from 'react';
import './index.css';




class Counter extends Component {
    state = {
        count: 0,
    }

    increaseCount = () => {
        let count = this.state.count +1;
        this.setState({
            count
        })
    }

    decreaseCount = () => {
        let count = this.state.count-1;
        this.setState({
            count
        })
    }

    render () {
        return (
            <div className ='needspace'>
                <h3>Counter: {this.state.count}</h3>
                <button onClick={this.increaseCount}>decrement</button>{}
                <button onClick={this.decreaseCount}>increment</button>
            </div>
        );
    }
}


export default Counter;