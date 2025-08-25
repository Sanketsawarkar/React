import { useState } from "react";

function checkBox(){
    const[skills,setSkills]=useState([]);
        const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
      }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])
      }
    }
    return(
        <div>
            <h3>Select Your Skills</h3>
            <br />
            <input type="checkbox"   onChange={handleSkills} id="php" value="PHP"/>
            <label htmlFor="php">PHP</label>

            <br />
            <input type="checkbox" onChange={handleSkills} id="java" value="JAVA" />
            <label htmlFor="java">JAVA</label>
            <br />
            <input type="checkbox" onChange={handleSkills} id=".Net" value="DotNet"/>
            <label htmlFor=".Net">DotNet</label>

          <h3>{skills.toString()}</h3>
        </div>
    )
}
export default checkBox;