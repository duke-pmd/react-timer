// import { render } from "@testing-library/react";
import React from "react";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    splitRecords,
    active,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <span>{formatTime(time.current)}</span>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
        </div>
        <div className="split-wrapper">
          <ul>
            {splitRecords.map((record, index) => (
              <li key={index}>
                <span>{`Split ${index + 1}:  ${formatTime(record)}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
