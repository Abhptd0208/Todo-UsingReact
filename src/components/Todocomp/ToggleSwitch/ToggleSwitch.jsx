import { useState } from "react"

import "./ToggleSwitch.css"
export const ToggleSwitch=()=>{

    const[isOn, setisOn]=useState(false)

    const handleToggleSwitch=()=>{
        setisOn(!isOn);
    }

    return(
        <div className="toggle-switch" style={{backgroundColor:isOn ? "black":"white"}} onClick={handleToggleSwitch}>
            <div className={`switch ${isOn ? "on" : "off" }`}>
                <span className="switch-state">{isOn? "on":"off"}</span>
            </div>
        </div>
    )
}