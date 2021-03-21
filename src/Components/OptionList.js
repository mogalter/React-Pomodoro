import React from 'react';
import Option from './Option';

const OptionList = ({pomodoro, breakTime, longBreak}) => {
  return (
    <div class="ui horizontal list">
      <div class="item">
        <Option labelName="Pomodoro" value={pomodoro.time} setTime={pomodoro.setter} />
      </div>
      <div class="item">
        <Option labelName="Short Break" value={breakTime.time} setTime={breakTime.setter}/>
      </div>
      <div class="item">
        <Option labelName="Long Break" value={longBreak.time} setTime={longBreak.setter}/>
      </div>
    </div>
  );
}

export default OptionList
