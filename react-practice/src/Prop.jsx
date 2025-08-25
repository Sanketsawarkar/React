import React from 'react'
import User from './User'   // Import the main User component

export default function Prop() {
  return (
    <div>
      <h2>Props in React JS</h2>
      {/* Passing props to User */}
      <User name="Sanket Sawarkar" age={24} email="sanket@test" />
    </div>
  )
}
