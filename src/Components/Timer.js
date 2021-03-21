import React, {useState, useEffect} from 'react';
import TimerCSS from './Timer.css'


const Timer = ({pomodoroTime, breakTime, longBreakTime, isOn}) => {
  const padTime = (time) => {
    let strTime = String(time)
    return (strTime.length > 1) ? strTime : "0"+strTime
  }

  const [phase, setPhase] = useState("Pomodoro")
  let [pomodoroCount, breakTimeCount] = [1, 0]

  const getCycleTime = () => {
    if (phase === "Pomodoro") {
      return pomodoroTime
    } else if (phase === "Short Break") {
      return breakTime
    } else if (phase === "Long Break") {
      return longBreakTime
    } else {
      return 0
    }
  }

  const getEnd = () => {
    let end = new Date();
    end.setMinutes(end.getMinutes() + getCycleTime())
    end = new Date(end)
    return end
  }

  const getTimeLeft = () => {
    let now = new Date();
    let difference = end - now;
    console.log(difference)
    let remainingTime = {};
    if (difference > 0) {
        remainingTime = {
          minutes: padTime(Math.floor((difference / 1000 / 60) % 60)),
          seconds: padTime(Math.floor((difference / 1000) % 60)),
        }
    }
    return remainingTime
  }

  // if paused, we need to readjust the end time

  const [end, setEnd] = useState(getEnd())
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  const shiftCycle = () => {
    let date = new Date().toLocaleTimeString('en-US', { hour12: false,
                                             hour: "numeric",
                                             minute: "numeric",
                                             seconds: "numeric",
                                          });
    console.log(phase, breakTimeCount, pomodoroCount, date)
    if (phase === "Pomodoro" && timeLeft) {
      if (pomodoroCount < 4) {
        console.log("Entering short break!")
        setPhase("Short Break")
        breakTimeCount += 1
      } else {
        console.log("Entering long break!")
        setPhase("Long Break")
      }
      setEnd(getEnd())
      setTimeLeft(getTimeLeft());
    } else if (phase === "Short Break" && breakTimeCount < 4){
      console.log("Entering Pomodoro")
      setPhase("Pomodoro")
      pomodoroTime += 1
      setEnd(getEnd())
      setTimeLeft(getTimeLeft());
      // go back to pomodoro
    } else if (phase === "Long Break") {
      setPhase("End of Timer")
      isOn=false
    }
  }

  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => {
        setTimeLeft(getTimeLeft());
        if (Object.keys(timeLeft).length === 0) {
          console.log("Shift cycle")
          shiftCycle()
        }
      }, 1000)
      return (() => { clearTimeout(timer)})
    }
  })

  getTimeLeft()
  return (
    <div className="timerContainer">
      <h1 className="ui header">{phase}</h1>
      <p className="timer">{timeLeft.minutes} : {timeLeft.seconds}</p>
    </div>
  );
}

export default Timer;
