import { useState } from "react"

function Toggle() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h2>Toggle in React Js</h2>
      
    
      <button onClick={() => setDisplay(!display)}> Toggle </button>

      
      {display ? <h3>Sanket Sawarkar</h3> : null}
    </div>
  )
}

export default Toggle;
