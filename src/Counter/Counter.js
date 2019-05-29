import React, {Component} from 'react';
import './Counter.css';


class Counter extends Component {
  constructor(props) {
    super(props);
      this.state = {count:0};
  }


    increment = () => {
      this.setState(prevState => ({
        count:prevState.count + 1
      }));
    }

    reset = () => {
      this.setState(prevState => ({
        count:prevState.count=0
      }));
    }

    render() {
      return (
     <div  className="Main">

     <div onClick={this.increment} className="circle">

     <p>{this.state.count}</p>

     </div>

     <button onClick={this.reset}>Reset Counter</button>

      </div>
      );
    }
  }

export default Counter;
