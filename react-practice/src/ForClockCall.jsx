
import React, { useState } from 'react'
import Clock from './Clock'

export default function ForClockCall() {
    const [color,setColor]=useState('green')
  return (
    <div>
          <h1> Digital Clock in React </h1>
          <select onChange={(event)=>setColor(event.target.value)}>
            <option value="red">Red</option>
            <option value="Blue">Blue</option>
            <option value="green">green</option>
          </select>
        <Clock color={color}/>
      </div>
  )
}
