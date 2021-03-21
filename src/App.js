import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import OptionList from './Components/OptionList'
import Buttons from "./Components/Buttons"
import Timer from "./Components/Timer"

const App = () => {
  const [pomodoroTime, setPomodoroTime] = useState(1)
  const [breakTime, setBreakTime] = useState(1)
  const [longBreakTime, setLongBreakTime] = useState(15)
  const [curCycle, setCurCycle] = useState(pomodoroTime)
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="ui container" style={{marginTop: "10px"}}>
      <h3 class="ui header">Quickly Pomodoro</h3>
      <OptionList
        pomodoro = {{ time: pomodoroTime, setter: setPomodoroTime}}
        breakTime = {{ time: breakTime, setter: setBreakTime}}
        longBreak = {{ time: longBreakTime, setter: setLongBreakTime}}
      />
      <Buttons greenText="Start"
               yellowText="Pause"
               redText="Reset"
               setIsOn={setIsOn} />
      <hr />
      <div className="pomodoro">
        <Timer pomodoroTime={pomodoroTime}
               breakTime={breakTime}
               longBreakTime={longBreakTime}
               isOn={isOn}
        />
      </div>
      <hr/>
    </div>
  );
}

export default App;
