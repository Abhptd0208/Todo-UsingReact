import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
// import {Prac1} from './components/Prac1'
// import { Prac2 }  from './components/Prac2'
// import {EventPropagation} from './components/Prac3' 
// import { State } from './components/hoooks/State'
// import { SiblingComponent } from './components/hoooks/State'
// import {DerivedState} from './components/DerivedState'
// import { LiftingTheStateUp } from './components/LiftingTheStateUp'
// import { ToggleSwitch } from './Projects/ToggleSwitch/ToggleSwitch'


// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Prac1/> */}
    {/* <Prac2/> */}
    {/* <EventPropagation/> */}
    {/* <State/> */}
    {/* <SiblingComponent/> */}
    {/* <DerivedState /> */}
    {/* <LiftingTheStateUp /> */}
    {/* // <ToggleSwitch /> */}
  

  </StrictMode>
)
