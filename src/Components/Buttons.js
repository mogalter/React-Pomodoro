import React, { useState } from 'react';

const Buttons = ({greenText, yellowText, redText, setIsOn}) => {
  return (
    <div style={{padding : "10px 0px 10px 0px", textAlign: "center"}}>
      <button className="ui green button" onClick={() => {
        setIsOn(true)
      }}>{greenText}</button>
      <button className="ui yellow button" onClick={() => {
        setIsOn(false)
      }}>{yellowText}</button>
      <button className="ui red button">{redText}</button>
    </div>
  )
}

export default Buttons;
