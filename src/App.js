import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter';

class App extends Component {
  state = {
    count: 0,
  };


  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    if (this.state.count <= 0) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  reset = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        < Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
          reset={this.reset}
        />
      </div>
    )
  }
}

export default App;