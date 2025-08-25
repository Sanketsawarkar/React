import React from 'react'

function User({ name, age, email }) {
  return (
    <>
      <h1>User Component</h1>
      <h3>Props Data:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </>
  )
}

export default User
