import { useState } from "react";


export default function State() {

    const[fruit,setFruit]=useState("Apple");

    const handleFruit=()=>{

        setFruit("Banana")
    }
   
  return (
    <div>
      <h1>State in react </h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruit Name</button>
   
     <br />
     <br />
     
    </div>
  )
}
