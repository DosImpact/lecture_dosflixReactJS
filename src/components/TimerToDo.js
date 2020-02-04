import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks/useInterval";
//할일, 예상 시간, 타임랩스 visible

const useTimer = initTime => {
  const [timer, setTimer] = useState(initTime);

  //   useInterval(() => {
  //     setTimer(timer - 1);
  //   }, 1000);

  useEffect(() => {
    if (!timer) return;
    const setIntervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(setIntervalId);
  }, [timer]);

  return { timer, setTimer };
};

export const TimerToDo = ({ title, time, visible }) => {
  const { timer, setTimer } = useTimer(time);
  return (
    <div>
      <div>
        <div>
          <span>할일 : </span>
          <span>{title}</span>
        </div>
        <div>
          <span>예상시간 : </span>
          <span>{time}</span>
        </div>
        <div>
          <button>시작</button>
          <button>끝</button>
        </div>
      </div>
      <div>
        <div>
          <span>걸린시간 : </span>
          <span>{timer}</span>
        </div>
        <div>
          <span>달성률</span>
          <span>85%</span>
        </div>
        <div>
          <span>성공</span>
          <span>실패</span>
        </div>
      </div>
    </div>
  );
};
