import { useEffect } from "react"

const Counter=({count,data})=>{
   
    useEffect(()=>{
        console.log("Mounting Phase Only");
    },[])

        useEffect(()=>{
        console.log("Update Mounting Phase Only");
    },[count])
    


    return(
        <div>
            <h2>Counter Value{count}</h2>
            <h2>Data Value{data}</h2>
            </div>

    )
}
export default Counter