import React, { Component } from 'react';
import Header from './Header';
import CounterList from './CounterList';
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      counters:0
    }
  }

  increaseCounters = ()  =>{
    let counters = this.state.counters +1;
    this.setState({
      counters
    })
  }
  
  decreaseCounters =() => {
    let counters = this.state.counters -1;
    this.setState({
      counters
    })
  }

  render() {
    return (
      <div className='App'>
        <Header
          count={this.state.counters}
          minus={this.decreaseCounters}
          add={this.increaseCounters}
        />
        
        <CounterList counter = {this.state.counters}/>
      </div>
    );
  }
}
export default App;
