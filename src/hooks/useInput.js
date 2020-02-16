import React, { useState } from "react";
//value와 onChange를 리턴해준다.
const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
export default useInput;
