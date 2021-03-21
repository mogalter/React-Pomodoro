import React, { useState } from 'react';

const Option = ({labelName, value, setTime}) => {
  const [term, setTerm] = useState(value)
  return (
    <div className="ui labeled input" style={{padding : "5px"}}>
      <div className="ui label">{labelName}</div>
      <input type="text"
             value={term}
             onChange={(e) => {
               setTerm(e.target.value)
               setTime(e.target.value)
             }} 
             />
    </div>
  )
}

export default Option
