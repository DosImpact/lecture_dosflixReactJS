import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Time = () => {
  const [h, seth] = useState(0);
  const [m, setm] = useState(0);
  const [s, sets] = useState(0);
  const getTime = () => {
    const d = new Date();
    seth(d.getHours());
    setm(d.getMinutes());
    sets(d.getSeconds());
  };
  useInterval(() => {
    getTime();
  }, 1000);

  return (
    <div>
      {h}:{m}:{s}
    </div>
  );
};
export default Time;
