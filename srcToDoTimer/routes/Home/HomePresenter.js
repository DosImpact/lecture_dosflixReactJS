import React from "react";
import { TimerToDo } from "../../components/TimerToDo";

export default () => {
  return (
    <>
      <div>
        <TimerToDo title="타이머 투두 앱 만들기" time={170} visible={true} />
      </div>
    </>
  );
};
