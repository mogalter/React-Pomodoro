import React, { useState } from 'react';

const Buttons = ({startText, stopText, setIsOn, isOn}) => {
  return (
    <div style={{padding : "10px 0px 10px 0px", textAlign: "center"}}>
      <button className={`ui ${isOn ? 'red' : 'green'} button`} onClick={() => {
        setIsOn(!isOn)
      }}>{`${isOn ? stopText : startText}`}</button>
    </div>
  )
}

export default Buttons;
