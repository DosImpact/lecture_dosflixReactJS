import React, { useState, useEffect } from "react";
import useInput from "../hooks/useInput";

const NAME_LS = "USER";

export default () => {
  const [name, setName] = useState("");
  const [showInput, setshowInput] = useState(true);
  useEffect(() => {
    const current = localStorage.getItem(NAME_LS);
    if (current !== null) {
      setName(current);
    }
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem(NAME_LS, name);
  };
  return (
    <div>
      {showInput}
      <form onSubmit={handleSubmit}>
        {showInput ? (
          <input
            placeholder="enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
          ></input>
        ) : null}
        <button onClick={() => setshowInput(!showInput)}>Change Name!</button>
      </form>
      {name ? <div>Hello! {name}</div> : null}
    </div>
  );
};
