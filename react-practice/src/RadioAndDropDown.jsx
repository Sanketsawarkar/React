import React, { useState } from 'react'

export default function RadioAndDropDown() {
  
    const[gender,setGender]=useState("")
     const[city,setCity]=useState("Pune")

  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value="Male" id="male"/>
      <label htmlFor="male" >Male</label>
      <br />
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value="Female" id="female"/>
      <label htmlFor="female">Female</label>

      <h2>Selected gender:{gender}</h2>

      <hr />
      <br />
      <br />

      <h3>Select City</h3>
      <select onChange={(event)=>setCity(event.target.value)} value="city">
        <option value="Pune">Pune</option>
        <option value="mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select>

      <h4>Selected City : {city}</h4>

    </div>
  )
}
