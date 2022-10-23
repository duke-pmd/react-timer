import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(useRef(ini));
  const [splitRecords, setSplitRecords] = useState([]);

  // const isStart = false;
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    refInterval.current = setInterval(() => {
      setTime({ ...time, current: ++time.current });
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime({ ...time, current: 0 });
    clearInterval(refInterval.current);
    setSplitRecords([]);
    active.current.disabled = false;
  };
  const splitTimer = () => {
    splitRecords.push(time.current);
    setSplitRecords(splitRecords);
    active.current.disabled = false;
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    splitRecords,
    active,
  };
};
export default useTimer;
