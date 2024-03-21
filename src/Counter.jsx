import React, { useState } from 'react';
import { createStore } from 'redux';
import reducer from './Reducers';
import { increaseCount, decreaseCount } from './Count';

const store = createStore(reducer)


 function Counter() {

  const [count, setCounter] = useState(0);

  const unsubscribe = store.subscribe(()=>{
    setCounter(store.getState().count)
  })  

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>store.dispatch(increaseCount())}>Like</button>
      <button onClick={()=>store.dispatch(decreaseCount())}>Unlike</button>
    </div>
  )
}

export default Counter;