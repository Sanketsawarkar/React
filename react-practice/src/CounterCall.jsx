import React, { useState } from 'react'
import Counter from './Counter'
import { Button, Alert, Container } from 'react-bootstrap';

export default function CounterCall() {
    const[count,setCount]=useState(0);
    const[data,setData]=useState(0);
  return (
    <div>
        <h2>Handle Props Side Effect with useEffect in  Component </h2>
      <Counter count={count} data={data}/>
      <button onClick={()=>setCount(count+1)}>Counter {count}</button>
      <button onClick={()=>setData(data+1)}>Data:{data} </button>
    </div>
  )
}
