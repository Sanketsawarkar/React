import { useState } from 'react'
import './App.css'
import State from './assets/State'
import Toggle from './assets/Toggle'
import Prop from './Prop'   // Import Prop (which uses User)
import GetInput from './GetInput'
import CheckBoxes from './CheckBoxes'
import RadioAndDropDown from './RadioAndDropDown'
import ArrayLoop from './ArrayLoop'
import ForClockCall from './ForClockCall'
import UseEffectEx from './UseEffectEx'
import CounterCall from './CounterCall'



function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter Val : {counter}</h1>
      <button  onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>

      <hr />
      <State />

      <hr />
      <Toggle />

      <hr />
      <Prop />   

      <hr />
      <br />
      <GetInput/>
      
      <hr />
      <br />
       <CheckBoxes/>
       <hr />
      <br />
       <RadioAndDropDown/>
       <hr />
      <br />
       <ArrayLoop/>
       <hr />
      <br />
      <ForClockCall/>
      <hr />
      <br />
      <UseEffectEx/>
       <hr />
      <br />
      <CounterCall/>
    </>
  )
}


 export default App
