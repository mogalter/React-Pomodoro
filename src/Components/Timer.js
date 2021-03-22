import React, {useState, useEffect} from 'react';
import TimerCSS from './Timer.css'

const Timer = ({pomodoroTime, breakTime, longBreakTime, isOn}) => {

  const [phase, setPhase] = useState("Session")
  var [pomodoroCount, breakTimeCount] = [1, 0]
  const [timeLeft, setTimeLeft] = useState(pomodoroTime)
  var timerId = false
  // get seconds by multiplying time by 60

  const getCycleTime = () => {
    console.log(pomodoroTime, breakTime, longBreakTime)
    if (phase === "Session") {
      console.log("Returning session time of", pomodoroTime)
      return pomodoroTime
    } else if (phase === "Short Break") {
      console.log("Returning break time of", breakTime)
      return breakTime
    } else if (phase === "Long Break") {
      console.log("Returning long break time of", longBreakTime)
      return longBreakTime
    } else {
      return 0
    }
  }

  const padTime = (time) => {
    let strTime = String(time)
    return strTime.length > 1 ? strTime : "0" + strTime
  }

  const updateTime = () => {
    console.log(timeLeft)
    if (timeLeft === 0) {
      if (phase === "Session") {
        if (pomodoroCount < 4) {
          console.log("Setting as short break")
          setPhase("Short Break")
          breakTimeCount += 1
        } else {
          setPhase("Long Break")
        }
      } else if (phase === "Short Break") {
        setPhase("Session")
        pomodoroCount += 1
        console.log("Pomodoro", pomodoroCount)
      } else if (phase === "Long Break") {
        setPhase("End")
      }
    } else {
      setTimeLeft(timeLeft-1)
    }
  }

  useEffect(() => {
    if (isOn) {
      timerId = setInterval(() => updateTime(), 1000)
      return (() => {
        clearInterval(timerId)
      })
    }
  })

  useEffect(() => {
    setTimeLeft(getCycleTime())
  }, [phase])

  const transformSeconds = () => {
      const minutes = padTime(Math.floor(timeLeft / 60))
      const seconds = padTime(Math.floor(timeLeft % 60))
      return [minutes, seconds]
  }

  const [minutes, seconds] = transformSeconds()

  return (
    <div className="timerContainer">
      { isOn ?
        <div>
          <h1 className="ui header">{phase}</h1>
          <p className="timer">
            {minutes} : {seconds}
          </p>
        </div>: <p className="timer">PAUSED</p>
      }
    </div>
  );
}

export default Timer;
