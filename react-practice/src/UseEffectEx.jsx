import React, { useEffect, useState } from 'react'

export default function UseEffectEx() {
  const[counter,setCounter]=useState(0)
  const[data,setData]=useState(0)

    function callOnce(){
        console.log("callOnce Function Call")
    }

    useEffect(()=>{
          callOnce();
    },[])

  
  return (
    <div>
      <h1>Us-eEffect Ex</h1>
       <button onClick={()=>setCounter(counter+1)}>Counter:{counter}</button>
       <button onClick={()=>setData(data+1)}>Data:{data}</button>
    </div>
  )
}
