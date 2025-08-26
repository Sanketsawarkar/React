import React from 'react'

export default function ArrayLoop() {
   

    const userData=[
        {
        name:'abc',
        age :24,
        email:'abc@test.com',
        id:1
    },
    {
        name:'efg',
        age :27,
        email:'efg@test.com',
        id:2
    },
    {
        name:'hij',
        age :25,
        email:'hij@test.com',
        id:3
    },
    {
        name:'xyz',
        age :22,
        email:'xyz@test.com',
        id:4
    }]


  return (
    <div>
      <h1>Loop in jsx with map function</h1>

      <table border={2}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
            </tr>
        </thead>
        <tbody>
           {
            userData.map((item)=>(
               <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
            </tr>
            ))
           }
        </tbody>
      </table>

      <hr /> <br />
      <h1>Reuse componenet in loop </h1>
      
    </div>
  )
}
