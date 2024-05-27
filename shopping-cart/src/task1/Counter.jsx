import React from 'react'
import "./counter.css"
export function counterReducer(state, action) {
    if(action.type==='INCREMENT')
    {
        return {
        count: state.count + 1,
      };
    }
    
    if(action.type==='DECREMENT')
    {
        return {
        count: state.count - 1,
      };
    }
    
    if(action.type==='RESET')
    {
        return {
        count: 0,
      };
    }
    
    return state;
}


function Counter() {
const [counterState, counterDispatch] = React.useReducer(counterReducer, {
    count: 0});
  
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={()=> counterDispatch ({
			type: 'INCREMENT'
		})}>Increment</button>
		
        <button onClick={()=> counterDispatch ({
			type: 'DECREMENT'
		})}>Decrement</button>
        <button onClick={()=> counterDispatch ({
			type: 'RESET'
		})}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default Counter;
