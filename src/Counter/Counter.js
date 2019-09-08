import React from 'react';
import './Counter.css'

export default function counter(props) {
  return (
    <div>
      <div className={props.count === 0 ? "circle neutral" : props.count % 10 === 0 ? "circle pink" : props.count % 2 === 0 ? "circle even" : "circle odd"}>
        <p>{props.count}</p>
      </div>
      <div className="button">
        <div className="increment">
          <p onClick={props.increment}>Increase</p>
        </div>
        <div className="decrement">
          <p onClick={props.decrement}>Decrease</p>
        </div>
        <div className="reset">
          <p onClick={props.reset}>Reset</p>
        </div>
      </div>
    </div >

  )
}

