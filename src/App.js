import React, { useState } from 'react';
import OptionList from './Components/OptionList'
import Timer from "./Components/Timer"

const App = () => {
  const [pomodoroTime, setPomodoroTime] = useState(1)
  const [breakTime, setBreakTime] = useState(1)
  const [longBreakTime, setLongBreakTime] = useState(1)

  return (
    <div className="ui container" style={{marginTop: "10px"}}>
      <h3 className="ui header">Quickly Pomodoro</h3>
      <OptionList
        pomodoro = {{ time: pomodoroTime, setter: setPomodoroTime}}
        breakTime = {{ time: breakTime, setter: setBreakTime}}
        longBreak = {{ time: longBreakTime, setter: setLongBreakTime}}
      />
      <div className="pomodoro">
        <Timer pomodoroTime={pomodoroTime*60}
               breakTime={breakTime*60}
               longBreakTime={longBreakTime*60}
        />
      </div>
      <hr/>
    </div>
  );
}

export default App;
