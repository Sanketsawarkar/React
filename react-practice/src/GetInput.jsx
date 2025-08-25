import React, { useState } from 'react'

export default function GetInput() {
const[name,setName]=useState("")
const[pass,setPass]=useState("")
const[email,setemail]=useState("")

const[val,setVal]=useState("Sanket Sawarkar")
  return (
    <div>
      <h2>Get Input Field Value</h2>
      <br />
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Name" />
      <br />
      <h2>{val}</h2>
      <button onClick={()=>setVal("")}>Clear</button>
       <hr />


       <h2>Controller Component</h2>
       <form action="" >
        <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
        <br />
        <br />
        <input type="text" onChange={(event)=>setPass(event.target.value)} placeholder="Enter PassWord" />
        <br />
        <br />
        <input type="text" onChange={(event)=>setPass(event.target.value)} placeholder="Enter Email" />
        <br />
        <br />
        <button>Submit</button>
       </form>

       <h3>{name}</h3>
       <h3>{pass}</h3>
       <h3>{email}</h3>

 
    </div>
  )
}
